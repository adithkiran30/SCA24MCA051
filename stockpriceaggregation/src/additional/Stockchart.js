// src/components/StockChart.js
import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ReferenceLine, ResponsiveContainer } from "recharts";
import { Typography } from "@mui/material";

const Stockchart = ({ data }) => {
  if (!data || data.length === 0) return null;

  const avg = data.reduce((sum, item) => sum + item.price, 0) / data.length;

  return (
    <>
      <Typography variant="h6" gutterBottom>Price History</Typography>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <XAxis dataKey="lastUpdatedAt" tickFormatter={(t) => new Date(t).toLocaleTimeString()} />
          <YAxis />
          <Tooltip formatter={(val) => `$${val.toFixed(2)}`} labelFormatter={(label) => new Date(label).toLocaleString()} />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="price" stroke="#3f51b5" strokeWidth={2} dot={true} />
          <ReferenceLine y={avg} stroke="red" strokeDasharray="3 3" label="Avg" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default Stockchart;
