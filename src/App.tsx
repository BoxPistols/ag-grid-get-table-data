import React from "react";
import "ag-grid-enterprise";
// import { Divider } from "@mui/material";
import Grid from "./Grid";
import "./styles.css";
import SideItems from "./SideItems";
import Box from "@mui/material/Box";

export default function App() {
  return (
    <>
      <h2>AgGrid Example</h2>
      <Box sx={{ display: "inline-flex" }}>
        <SideItems />
        <Grid />
      </Box>
    </>
  );
}
