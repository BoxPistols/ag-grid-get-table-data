import React from "react"
import { Rnd } from "react-rnd"

type ContentAreaProps = {
  height: number
  onResize: (e: any, direction: any, ref: { offsetHeight: any }) => void
}

const ContentArea: React.FC<ContentAreaProps> = ({ height, onResize }) => {
  return (
    <Rnd
      size={{ width: "100%", height }}
      onResize={onResize}
      minHeight={100}
      maxHeight={280}
      enableResizing={{
        top: false,
        right: false,
        bottom: true,
        left: true,
      }}
      style={{
        position: "relative",
        backgroundColor: "#eee",
        padding: "24px",
        boxSizing: "border-box",
      }}
      dragHandleClassName="resize-handle"
    >
      ContentArea
    </Rnd>
  )
}

export default ContentArea
