import React from "react"
import { Rnd } from "react-rnd"
import { Box } from "@mui/material"
import SideItems from "./SideItems"
import ArrowIcon from "./ArrowIcon"

type ResizableSideItemsProps = {
  width: number
  onResize: (e: any, direction: any, ref: { offsetWidth: any }) => void
  onItemClick: (data: any) => void
  isHovered: boolean
  setIsHovered: (hover: boolean) => void
  hoverColor: string
}

const ResizableSideItems: React.FC<ResizableSideItemsProps> = ({
  width,
  onResize,
  onItemClick,
  isHovered,
  setIsHovered,
  hoverColor,
}) => {
  return (
    <Rnd
      dragHandleClassName="sideItems-drag-handle"
      className="resize-handle"
      size={{ width, height: "100%" }}
      onResize={onResize}
      minWidth={120}
      maxWidth={280}
      minHeight={"100%"}
      maxHeight={"100%"}
      enableResizing={{
        top: false,
        right: true,
        bottom: false,
        left: false,
      }}
      style={{
        position: "absolute",
        border: "1px solid #eee",
        zIndex: 1,
        boxSizing: "border-box",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      hoverColor={hoverColor}
    >
      <Box
        position="absolute"
        top={0}
        right={-1}
        width="4px"
        height="100%"
        display="block"
        sx={{
          backgroundColor: isHovered
            ? "rgba(100, 100, 200, 0.3)"
            : "transparent",
        }}
      />
      <SideItems onItemClick={onItemClick} />
      <ArrowIcon isHovered={isHovered} />
    </Rnd>
  )
}

export default ResizableSideItems
