import * as React from "react"

function SvgPlusIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="plusIcon_svg__h-6 plusIcon_svg__w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4v16m8-8H4"
      />
    </svg>
  )
}

export default SvgPlusIcon
