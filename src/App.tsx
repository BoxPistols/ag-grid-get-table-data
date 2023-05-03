import React, { useState } from "react"
import "ag-grid-enterprise"
import Grid from "./Grid"
import { CssBaseline, Container, Typography, Box } from "@mui/material"
import SideItems from "./SideItems"
import ColumnLists from "./ColumnLists"
import { Rnd } from "react-rnd"
import DragHandleIcon from "@mui/icons-material/DragHandle"

export default function App() {
  const [selectedItem, setSelectedItem] = useState<any[] | null | string>(null)
  const [keyList, setKeyList] = useState<string[]>([])
  const [sideItemsWidth, setSideItemsWidth] = useState(280)
  const [sideItemsWidth2, setSideItemsWidth2] = useState(280)
  const [contentAreaHeight, setContentAreaHeight] = useState(200)
  const [isHovered, setIsHovered] = useState(false)

  const handleResize = (e: any, direction: any, ref: { offsetWidth: any }) => {
    const newWidth = ref.offsetWidth
    if (newWidth < 50) {
      setSideItemsWidth(0)
    } else {
      setSideItemsWidth(newWidth)
    }
  }

  const handleResize2 = (e: any, direction: any, ref: { offsetWidth: any }) => {
    const newWidth2 = ref.offsetWidth
    {
      setSideItemsWidth2(newWidth2)
    }
  }

  const handleContentAreaResize = (
    e: any,
    direction: any,
    ref: { offsetHeight: any }
  ) => {
    setContentAreaHeight(ref.offsetHeight)
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
        <Box display="flex" style={{ position: "relative" }}>
          <Rnd
            dragHandleClassName="sideItems-drag-handle"
            className="resize-handle"
            size={{ width: sideItemsWidth, height: "100%" }}
            onResize={handleResize}
            minWidth={120}
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
              // backgroundColor: isHovered ? "rgba(33, 150, 243, 0.5)" : "#ccc",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Box
              position="absolute"
              top={0}
              right={-1}
              width="4px"
              height="100%"
              display="block"
              sx={{
                backgroundColor: isHovered
                  ? "rgba(100, 100, 200, 0.3)"
                  : "transparent",
              }}
            ></Box>
            <SideItems onItemClick={(data) => setSelectedItem(data)} />
            <Box
              position="absolute"
              top={40}
              right={-12}
              border="1px solid #999"
              borderRadius={"50%"}
              width="40"
              height="40"
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                backgroundColor: isHovered ? "#fcfcfc" : "#f9f9f9",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.47125 4L5.53125 4.94L8.58458 8L5.53125 11.06L6.47125 12L10.4713 8L6.47125 4Z"
                  fill="black"
                  fillOpacity="0.56"
                />
              </svg>
            </Box>
          </Rnd>
          <Box
            display="flex"
            flexDirection="column"
            style={{ marginLeft: sideItemsWidth }}
          >
            {/* // contentArea */}
            <Box style={{ padding: "8px" }}>
              <Rnd
                size={{ width: "100%", height: contentAreaHeight }}
                onResize={handleContentAreaResize}
                minHeight={100}
                maxHeight={280}
                enableResizing={{
                  top: false,
                  right: false,
                  bottom: true,
                  left: true,
                }}
                style={{
                  position: "relative",
                  backgroundColor: "#eee",
                  padding: "24px",
                  boxSizing: "border-box",
                }}
                dragHandleClassName="resize-handle"
              >
                ContentArea
              </Rnd>

              <Typography
                variant="h6"
                border={"1px solid #eee"}
                sx={{
                  padding: "4px 8px",
                  marginBottom: "2px",
                }}
              >
                Table Title
              </Typography>

              <Box display="flex">
                <Rnd
                  size={{ width: sideItemsWidth2, height: "100%" }}
                  onResize={handleResize2}
                  minWidth={120}
                  maxWidth={320}
                  minHeight={"100%"}
                  maxHeight={"100%"}
                  enableResizing={{
                    top: false,
                    right: true,
                    bottom: false,
                    left: false,
                  }}
                  style={{
                    position: "relative",
                    border: "1px solid #eee",
                    zIndex: 1,
                    boxSizing: "border-box",
                  }}
                  dragHandleClassName="resize-handle"
                >
                  <ColumnLists keyList={keyList} />
                </Rnd>
                <Grid selectedItem={selectedItem} onKeysUpdate={setKeyList} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}
