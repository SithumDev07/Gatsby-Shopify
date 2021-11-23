import * as React from "react"

function SvgArrowLeft(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="arrow-left_svg__h-6 arrow-left_svg__w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  )
}

export default SvgArrowLeft
