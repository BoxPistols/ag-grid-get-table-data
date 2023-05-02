import React from "react"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import data1 from "./datas/data-1.json"
import { Paper } from "@mui/material"

type SideItemsProps = {
  onItemClick: (data: any[] | null | string) => void
}

const SideItems = ({ onItemClick }: SideItemsProps) => {
  return (
    <Paper elevation={3}>
      <List>
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
      </List>
    </Paper>
  )
}

export default SideItems
