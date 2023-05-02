import React, { useState } from "react"
import "ag-grid-enterprise"
import Grid from "./Grid"
import "./styles.css"
import SideItems from "./SideItems"
import Box from "@mui/material/Box"

export default function App() {
  const [selectedItem, setSelectedItem] = useState<any[] | null | string>(null) // <- 変更
  const [, setKeyList] = useState<string[]>([])

  return (
    <>
      <h2>AgGrid Example</h2>
      <Box display="flex">
        <SideItems onItemClick={(data) => setSelectedItem(data)} />
        <Grid selectedItem={selectedItem} onKeysUpdate={setKeyList} />
      </Box>
    </>
  )
}
