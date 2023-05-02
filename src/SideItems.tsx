import React from "react"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Box from "@mui/material/Box"

type SideItemsProps = {
  onItemClick: (itemIndex: number) => void
}

export default function SideItems({ onItemClick }: SideItemsProps) {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]

  return (
    <>
      <Box
        display="flex"
        width="180px"
        height="80vh"
        border="1px solid rgba(0, 0, 0, 0.12)"
        mr={2}
        sx={{ overflow: "scroll" }}
      >
        <Box width="100%" height="100%" minHeight="100vh" overflow="auto">
          <List>
            {items.map((item, index) => (
              <ListItem button key={index} onClick={() => onItemClick(index)}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
          {/* Add */}
          {/* <List>
            <ListItem button onClick={}>
              <ListItemText primary="オリンピックData" />
            </ListItem>
          </List> */}
        </Box>
      </Box>
    </>
  )
}
