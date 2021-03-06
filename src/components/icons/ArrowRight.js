import * as React from "react"

function SvgArrowRight(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="arrow-right_svg__h-6 arrow-right_svg__w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  )
}

export default SvgArrowRight
