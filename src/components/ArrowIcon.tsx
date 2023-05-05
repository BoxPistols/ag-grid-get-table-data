import React from "react"

type ArrowIconProps = {
  isHovered: boolean
}

const ArrowIcon: React.FC<ArrowIconProps> = ({ isHovered }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 40,
        right: -12,
        border: "1px solid #999",
        borderRadius: "50%",
        width: 28,
        height: 28,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: isHovered ? "#fcfcfc" : "#f9f9f9",
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.47125 4L5.53125 4.94L8.58458 8L5.53125 11.06L6.47125 12L10.4713 8L6.47125 4Z"
          fill="black"
          fillOpacity="0.56"
        />
      </svg>
    </div>
  )
}

export default ArrowIcon
