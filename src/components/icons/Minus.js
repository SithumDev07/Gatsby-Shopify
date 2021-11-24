import * as React from "react"

function SvgMinus(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="minus_svg__h-6 minus_svg__w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 12H4"
      />
    </svg>
  )
}

export default SvgMinus
