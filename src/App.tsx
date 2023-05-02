import React, { useState } from "react"
import "ag-grid-enterprise"
import Grid from "./Grid"
import { CssBaseline, Container, Typography, Box } from "@mui/material"
import SideItems from "./SideItems"
import ColumnLists from "./ColumnLists"

export default function App() {
  const [selectedItem, setSelectedItem] = useState<any[] | null | string>(null)
  const [keyList, setKeyList] = useState<string[]>([])

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box pt={4} pb={4}>
          <Typography variant="h4" align="center" gutterBottom>
            AgGrid Example
          </Typography>
          <Box display="flex">
            <SideItems onItemClick={(data) => setSelectedItem(data)} />
            <ColumnLists keyList={keyList} />
            <Grid selectedItem={selectedItem} onKeysUpdate={setKeyList} />
          </Box>
        </Box>
      </Container>
    </>
  )
}
