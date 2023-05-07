import React from "react"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import data1 from "../datas/data-1.json"
import data2 from "../datas/data-2.json"
import data3 from "../datas/data-3.json"
import data4 from "../datas/data-4.json"
import data5 from "../datas/data-5.json"
import { Box, Typography } from "@mui/material"

type SideItemsProps = {
  onItemClick: (data: any[] | null | string) => void
}

const SideItems = ({ onItemClick }: SideItemsProps) => {
  const dataFiles = [
    { name: "マーケティング詳細データ", data: data1 },
    { name: "消費者調査データ", data: data4 },
    { name: "Covid19感染者 世界データ", data: data5 },
    { name: "ラフテスト1", data: data2 },
    { name: "ラフテスト2", data: data3 },
  ]

  return (
    <Box overflow={"hidden"}>
      <List
        sx={{
          overflowY: "scroll",
          maxHeight: "84vh",
          height: "100%",
          border: "1px solid #eee",
          m: 1,
          whiteSpace: "nowrap",
          overflowX: "hidden",
          // "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        <ListItem button onClick={() => onItemClick("https://jsonplaceholder.typicode.com/posts")}>
          <ListItemText
            primary="Get API json placeholder"
            sx={{
              "&.MuiListItemText-root>.MuiTypography-root": {
                fontSize: 14,
              },
            }}
          />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => onItemClick("localData")}>
          <ListItemText
            primary="オリンピックメダルデータ"
            sx={{
              "&.MuiListItemText-root>.MuiTypography-root": {
                fontSize: 14,
              },
            }}
          />
        </ListItem>

        <Divider />

        {dataFiles.map((dataFile) => (
          <React.Fragment key={dataFile.name}>
            <ListItem
              button
              onClick={() => onItemClick(dataFile.data)}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <ListItemText
                primary={`${dataFile.name}`}
                sx={{
                  "&.MuiListItemText-root>.MuiTypography-root": {
                    fontSize: 14,
                  },
                }}
              />
              <ListItemText
                primary={`count-test: ${dataFile.data.length} datas`}
                sx={{
                  ml: "auto",
                  color: "#666",
                  "&.MuiListItemText-root>.MuiTypography-root": {
                    fontSize: 12,
                  },
                }}
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  )
}

export default SideItems
