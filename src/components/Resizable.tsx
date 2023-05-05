import React from "react"
import { Rnd } from "react-rnd"

type ResizableProps = {
  size: { width: number | string; height: number | string }
  onResize: (
    e: any,
    direction: any,
    ref: { offsetWidth: any; offsetHeight: any }
  ) => void
  enableResizing: any
  style?: React.CSSProperties
  dragHandleClassName?: string
  minWidth?: number
  maxWidth?: number
  minHeight?: number
  maxHeight?: number
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  children: React.ReactNode
}

const Resizable: React.FC<ResizableProps> = ({
  size,
  onResize,
  enableResizing,
  style,
  dragHandleClassName,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  onMouseEnter,
  onMouseLeave,
  children,
}) => {
  return (
    <Rnd
      dragHandleClassName={dragHandleClassName}
      size={size}
      onResize={onResize}
      minWidth={minWidth}
      maxWidth={maxWidth}
      minHeight={minHeight}
      maxHeight={maxHeight}
      enableResizing={enableResizing}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </Rnd>
  )
}

export default Resizable
