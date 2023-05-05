// ResizableColumnLists.tsx
import React from "react"
import { Rnd } from "react-rnd"
import ColumnLists from "./ColumnLists"

type ResizableColumnListsProps = {
  width: number
  onResize: (e: any, direction: any, ref: { offsetWidth: any }) => void
  keyList: string[]
  hoverColor?: string
  title?: string
}

const ResizableColumnLists: React.FC<ResizableColumnListsProps> = ({
  width,
  onResize,
  keyList,
  hoverColor = "rgba(100, 100, 200, 0.3)",
  title,
}) => {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <Rnd
      size={{ width, height: "100%" }}
      onResize={onResize}
      minWidth={120}
      maxWidth={320}
      minHeight={"100%"}
      maxHeight={"100%"}
      enableResizing={{
        top: false,
        right: true,
        bottom: false,
        left: false,
      }}
      style={{
        position: "relative",
        border: "1px solid #eee",
        zIndex: 1,
        boxSizing: "border-box",
      }}
      dragHandleClassName="resize-handle"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: -1,
          width: "4px",
          height: "100%",
          backgroundColor: isHovered ? hoverColor : "transparent",
        }}
      ></div>
      <ColumnLists keyList={keyList} title={title} />
    </Rnd>
  )
}

export default ResizableColumnLists
