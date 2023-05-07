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
    <Box border={"1px solid #eee"} px={1} py={2} sx={sx}>
      <Typography variant="body2" gutterBottom>
        {title}
      </Typography>
      <ul>
        {keyList.map((key, index) => (
          <li key={index}>{key}</li> // ここのListはTableのColumn名の一覧になる
        ))}
      </ul>
      <Typography variant="subtitle1">
        Total Columns: {keyList.length}
      </Typography>
    </Box>
  )
}

export default ColumnLists
