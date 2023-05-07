import React from "react"
import { Box, Typography } from "@mui/material"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import { Rnd } from "react-rnd"

type ContentAreaProps = {
  height: number
  onResize: (e: any, direction: any, ref: { offsetHeight: any }) => void
  children?: React.ReactNode
}

const ContentArea: React.FC<ContentAreaProps> = ({ height, onResize, children }) => {
  const [age, setAge] = React.useState("")

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
  }

  return (
    <Rnd
      size={{ width: "100%", height: 160 }}
      onResize={onResize}
      minHeight={160}
      maxHeight={220}
      enableResizing={{
        top: false,
        right: false,
        bottom: true,
        left: false,
      }}
      style={{
        position: "relative",
        backgroundColor: "#f9f9f9",
        padding: "24px",
        boxSizing: "border-box",
      }}
      dragHandleClassName="resize-handle"
    >
      <Box display="flex" flexDirection="column">
        <Typography component="h2" fontSize={20} color="initial">
          KPI Setting Title
        </Typography>
        <br />
        {/* Select */}
        <FormControl sx={{ m: 0, mt: -2, maxWidth: 480, background: "#fff" }} size="small">
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box>{children}</Box>
    </Rnd>
  )
}

export default ContentArea
