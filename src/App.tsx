import React, { useState } from "react"
import "ag-grid-enterprise"
import Grid from "./components/Grid"
import { CssBaseline, Typography, Box } from "@mui/material"
import ContentArea from "./components/ContentArea"
import ResizableSideItems from "./components/ResizableSideItems"
import ColumnLists from "./components/ColumnLists"
// import ResizableColumnLists from "./components/ResizableColumnLists"

export default function App() {
  const [selectedItem, setSelectedItem] = useState<any[] | null | string>(null)
  const [keyList, setKeyList] = useState<string[]>([])
  const [sideItemsWidth, setSideItemsWidth] = useState(280)
  const [contentAreaHeight, setContentAreaHeight] = useState(200)
  const [isHovered, setIsHovered] = useState(false)
  // const [sideItemsWidth2, setSideItemsWidth2] = useState(280)

  const handleResize = (e: any, direction: any, ref: { offsetWidth: any }) => {
    const newWidth = ref.offsetWidth
    if (newWidth < 50) {
      setSideItemsWidth(0)
    } else {
      setSideItemsWidth(newWidth)
    }
  }

  // const handleResize2 = (e: any, direction: any, ref: { offsetWidth: any }) => {
  //   const newWidth2 = ref.offsetWidth
  //   {
  //     setSideItemsWidth2(newWidth2)
  //   }
  // }

  const handleContentAreaResize = (_e: any, _direction: any, ref: { offsetHeight: any }) => {
    setContentAreaHeight(ref.offsetHeight)
  }

  return (
    <>
      <CssBaseline />

      <Typography
        variant="h5"
        align="center"
        sx={{
          backgroundColor: "#3e71c5f3",
          color: "#fff",
          padding: "8px",
          position: "sticky",
          top: 0,
          left: 0,
          zIndex: 100,
        }}
      >
        AgGrid Get Data from API
      </Typography>
      <Typography
        variant="h6"
        border={"1px solid #eee"}
        sx={{
          py: 1,
          px:2
        }}
      >
        Page Title
      </Typography>

      <Box pt={0} p={1} border={"1px solid #eee"}>
        <Box display="flex" style={{ position: "relative" }}>
          <ResizableSideItems
            width={sideItemsWidth}
            onResize={handleResize}
            onItemClick={(data) => setSelectedItem(data)}
            isHovered={isHovered}
            setIsHovered={setIsHovered}
            hoverColor="rgba(100, 100, 200, 0.3)" // 薄いブルーに変更する場合
          />
          <Box display="flex" flexDirection="column" style={{ marginLeft: sideItemsWidth }}>
            {/* Content Area */}
            <Box display="flex" flexDirection="column" sx={{ padding: "8px" }}>
              {/* <ResizableColumnLists width={sideItemsWidth2} onResize={handleResize2} /> */}
              {/* Column List */}
              <ContentArea height={contentAreaHeight} onResize={handleContentAreaResize} />

              <Box display="flex">
                <ColumnLists keyList={keyList} title="Table Column List" />
                {/* AgGrid */}
                <Grid selectedItem={selectedItem} onKeysUpdate={setKeyList} />
              </Box>
              {/* </ContentArea> */}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}
