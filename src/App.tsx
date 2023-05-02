import React, { useState } from "react"
import "ag-grid-enterprise"
import Grid from "./Grid"
import "./styles.css"
import SideItems from "./SideItems"
import Box from "@mui/material/Box"

export default function App() {
  // useStateを使って、selectedItemを定義 (初期値はnull)
  const [selectedItem, setSelectedItem] = useState<any[] | null | string>(null)
  // useStateを使って、keyListを定義 (初期値は空の配列)
  const [, setKeyList] = useState<string[]>([])

  return (
    <>
      <h2>AgGrid Example</h2>
      <Box display="flex">
        {/* // SideItemsコンポーネントを定義 (onItemClickには、setSelectedItemを渡す) */}
        <SideItems onItemClick={(data) => setSelectedItem(data)} />
        {/* // Gridコンポーネントを定義 (selectedItemとonKeysUpdateを渡す) */}
        <Grid selectedItem={selectedItem} onKeysUpdate={setKeyList} />
      </Box>
    </>
  )
}
