import React from "react";
import { FormControl, InputLabel, Select, MenuItem, TextField } from "@mui/material";

const Stockselect = ({ stocks, selectedStock, setSelectedStock, minutes, setMinutes }) => (
  <div style={{ display: "flex", gap: "3rem", alignItems: "center", marginBottom: "2rem" }}>
    <FormControl sx={{ minWidth: 300 }}>
      <InputLabel>Stock</InputLabel>
      <Select
        value={selectedStock}
        label="Stock"
        onChange={(e) => setSelectedStock(e.target.value)}
      >
        {Object.entries(stocks).map(([name, ticker]) => (
          <MenuItem key={ticker} value={ticker}>{name}</MenuItem>
        ))}
      </Select>
    </FormControl>

    <TextField
      label="Minutes"
      type="number"
      value={minutes}
      onChange={(e) => setMinutes(e.target.value)}
      inputProps={{ min: 1 }}
    />
  </div>
);

export default Stockselect;
