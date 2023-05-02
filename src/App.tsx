import React, { useState } from "react"
import "ag-grid-enterprise"
// import { Divider } from "@mui/material";
import Grid from "./Grid"
import "./styles.css"
import SideItems from "./SideItems"
import Box from "@mui/material/Box"

export default function App() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null)

  return (
    <>
      <h2>AgGrid Example</h2>
      <Box display="flex">
        <SideItems onItemClick={(index) => setSelectedItem(index)} />
        <Grid selectedItem={selectedItem} />
      </Box>
    </>
  )
}
