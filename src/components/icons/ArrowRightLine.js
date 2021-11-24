import * as React from "react"

function SvgArrowRightLine(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="arrow-right-line_svg__h-6 arrow-right-line_svg__w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  )
}

export default SvgArrowRightLine
