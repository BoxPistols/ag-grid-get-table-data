import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";

export default function SideItems() {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  return (
    <>
      <Box
        display="flex"
        height="80vh"
        border="1px solid rgba(0, 0, 0, 0.12)"
        mr={2}
        sx={{ overflow: "scroll" }}
      >
        <Box width="180px" height="100%" minHeight="100vh" overflow="auto">
          <List>
            {items.map((item, index) => (
              <ListItem button key={index}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </>
  );
}
