import React from "react"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import data1 from "./datas/data-1.json"
import data2 from "./datas/data-2.json"
import data3 from "./datas/data-3.json"
import data4 from "./datas/data-4.json"
import { Box } from "@mui/material"

type SideItemsProps = {
  onItemClick: (data: any[] | null | string) => void
}

const SideItems = ({ onItemClick }: SideItemsProps) => {
  return (
    <Box overflow={"hidden"} >
      <List
        sx={{
          overflowY: "scroll",
          maxHeight: "70vh",
          border: "1px solid #eee",
          m: 1,
        }}
      >
        <ListItem
          button
          onClick={() =>
            onItemClick("https://jsonplaceholder.typicode.com/posts")
          }
        >
          <ListItemText primary="Get async API-Data" />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => onItemClick("localData")}>
          <ListItemText primary="Load Local-json" />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => onItemClick(data1)}>
          <ListItemText primary="get data1" />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => onItemClick(data2)}>
          <ListItemText primary="get data2" />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => onItemClick(data3)}>
          <ListItemText primary="get data3" />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => onItemClick(data4)}>
          <ListItemText primary="get data4" />
        </ListItem>
      </List>
    </Box>
  )
}

export default SideItems
