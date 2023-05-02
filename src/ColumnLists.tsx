import React from "react"
import { Typography, Paper, Box } from "@mui/material"

type ColumnListsProps = {
  keyList: string[]
}

const ColumnLists: React.FC<ColumnListsProps> = ({ keyList }) => {
  return (
    <Paper elevation={3}>
      <Box p={2}>
        <Typography variant="h6" gutterBottom>
          Column Names:
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
    </Paper>
  )
}

export default ColumnLists
