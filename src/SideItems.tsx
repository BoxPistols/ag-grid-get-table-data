import React from "react"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import List from "@mui/material/List"
import data1 from "./datas/data-1.json" // <- 追加

type SideItemsProps = {
  onItemClick: (data: any[] | null | string) => void // <- 変更
}

// SlideItemsコンポーネントを定義 (SideItemsPropsを引数に取る)
const SideItems = ({ onItemClick }: SideItemsProps) => {
  return (
    <List>
      {/* // ListItemコンポーネントを定義 */}
      <ListItem
        button
        // ボタンがクリックされた時の処理を定義 (onItemClick)
        onClick={() =>
          // onItemClickには、APIのURLを渡す
          onItemClick("https://jsonplaceholder.typicode.com/posts")
        }
      >
        {/* // ListItemTextコンポーネントを定義 (primaryに表示するテキストを定義) */}
        <ListItemText primary="Get async API-Data" />
      </ListItem>

      {/* // ListItemコンポーネントを定義 (onItemClickには、ローカルデータを渡す)  */}
      <ListItem button onClick={() => onItemClick("localData")}>
        <ListItemText primary="Load Local-json" />
      </ListItem>
      {/* You can add more ListItem components here for other URLs */}
      <ListItem button onClick={() => onItemClick(data1)}>
        <ListItemText primary="get data1" />
      </ListItem>
    </List>
  )
}

export default SideItems
