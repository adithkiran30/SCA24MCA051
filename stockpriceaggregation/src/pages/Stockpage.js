import React, { useEffect, useState } from "react";
import axios from "axios";
import Stockselect from "../additional/Stockselect";
import Stockchart from "../additional/Stockchart";
import { Container, Typography } from "@mui/material";

const Stockpage = () => {
  const [stocks, setStocks] = useState({});
  const [selectedStock, setSelectedStock] = useState("");
  const [minutes, setMinutes] = useState(10);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://20.244.56.144/evaluation-service/stocks")
      .then(res => setStocks(res.data.stocks))
      .catch(err => console.error("There is an error fetching stocks:", err));
  }, []);

  useEffect(() => {
    if (selectedStock) {
      axios.get(`http://20.244.56.144/evaluation-service/stocks/${selectedStock}?minutes=${minutes}`)
        .then(res => setData(res.data))
        .catch(err => console.error("There is an error fetching stock data:", err));
    }
  }, [selectedStock, minutes]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Stock Price Tracker</Typography>
      <Stockselect
        stocks={stocks}
        selectedStock={selectedStock}
        setSelectedStock={setSelectedStock}
        minutes={minutes}
        setMinutes={setMinutes}
      />
      <Stockchart data={data} />
    </Container>
  );
};

export default Stockpage;
