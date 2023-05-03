import React, { useState } from "react"
import "ag-grid-enterprise"
import Grid from "./Grid"
import { CssBaseline, Container, Typography, Box } from "@mui/material"
import SideItems from "./SideItems"
import ColumnLists from "./ColumnLists"
import { Rnd } from "react-rnd"

export default function App() {
  const [selectedItem, setSelectedItem] = useState<any[] | null | string>(null)
  const [keyList, setKeyList] = useState<string[]>([])
  const [sideItemsWidth, setSideItemsWidth] = useState(280)

  const handleResize = (e: any, direction: any, ref: { offsetWidth: any }) => {
    const newWidth = ref.offsetWidth
    if (newWidth < 50) {
      setSideItemsWidth(0)
    } else {
      setSideItemsWidth(newWidth)
    }
  }

  return (
    <>
      <CssBaseline />

      <Typography
        variant="h5"
        align="center"
        sx={{
          backgroundColor: "#3f51b5",
          color: "#fff",
          padding: "8px",
        }}
      >
        AgGrid Get Data from API
      </Typography>
      <Typography
        variant="h6"
        border={"1px solid #eee"}
        sx={{
          padding: "8px",
        }}
      >
        Page Title
      </Typography>
      <Box pt={0} p={2} border={"1px solid #eee"}>
        {/* <Box display="flex" style={{ position: "relative" }}> */}
        <Box display="flex" style={{ position: "relative" }}>
          <Rnd
            size={{ width: sideItemsWidth, height: "100%" }}
            onResize={handleResize}
            minWidth={40}
            maxWidth={280}
            minHeight={"100%"}
            maxHeight={"100%"}
            enableResizing={{
              top: false,
              right: true,
              bottom: false,
              left: false,
            }}
            style={{
              position: "absolute",
              border: "1px solid #eee",
              zIndex: 1,
              boxSizing: "border-box",
            }}
            dragHandleClassName="resize-handle"
          >
            <SideItems onItemClick={(data) => setSelectedItem(data)} />
          </Rnd>
          <Box
            display="flex"
            flex-direction="column"
            style={{ marginLeft: sideItemsWidth }}
          >
            <Box style={{ padding: "8px" }}>
              <Box
                style={{ backgroundColor: "#eee", padding: "24px", minHeight: "20vh" }}
              >
                ContentArea
              </Box>
              <Box display="flex">
                <ColumnLists keyList={keyList} />
                <Grid selectedItem={selectedItem} onKeysUpdate={setKeyList} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}
