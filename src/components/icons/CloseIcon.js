import * as React from "react"

function SvgCloseIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="close-icon_svg__h-6 close-icon_svg__w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  )
}

export default SvgCloseIcon
