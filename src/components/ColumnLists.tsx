// ColumnLists.tsx
import React from "react"
import { Typography, Box } from "@mui/material"

type ColumnListsProps = {
  keyList: string[]
  title?: string
  sx?: any
}

const ColumnLists: React.FC<ColumnListsProps> = ({ keyList, title,sx }) => {
  return (
    <Box
      border={"1px solid #eee"}
      sx={sx}
      style={{
        maxHeight: 600,
        overflow: "auto",
        position: "relative",
      }}
      >
      <Typography
        fontSize={16}
        position="sticky"
        top={0}
        py={1}
        sx={{
          backgroundColor: "#f9f9f9",
          borderBottom: "1px solid #eee",
          py: 1,
          px: 2,
          margin: 0,
        }}
      >
        {title}
      </Typography>
      <ul>
        {keyList.map((key, index) => (
          <li key={index} style={{fontSize: 14}}>{key}</li> // ここのListはTableのColumn名の一覧になる
        ))}
      </ul>
      <Typography
        variant="subtitle1"
        position="sticky"
        bottom={0}
        sx={{
          backgroundColor: "#f9f9f9",
          borderTop: "1px solid #eee",
          py: 1,
          px: 2,
          margin: 0,
        }}
      >
        Total Columns: {keyList.length}
      </Typography>
    </Box>
  )
}

export default ColumnLists
