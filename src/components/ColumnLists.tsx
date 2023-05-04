import React from "react"
import { Typography, Box } from "@mui/material"

type ColumnListsProps = {
  keyList: string[]
}

const ColumnLists: React.FC<ColumnListsProps> = ({ keyList }) => {
  return (
    <Box border={"1px solid #eee"} p={2}>
      <Typography variant="body2" gutterBottom>
        Table Column List
      </Typography>
      <ul>
        {keyList.map((key, index) => (
          <li key={index}>{key}</li>
        ))}
      </ul>
      <Typography variant="subtitle1">
        Total Columns: {keyList.length}
      </Typography>
    </Box>
  )
}

export default ColumnLists
