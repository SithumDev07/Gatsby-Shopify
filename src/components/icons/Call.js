import * as React from "react"

function SvgCall(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="call_svg__icon call_svg__icon-tabler call_svg__icon-tabler-phone-call"
      width={44}
      height={44}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#FFA029"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2M15 7a2 2 0 012 2M15 3a6 6 0 016 6" />
    </svg>
  )
}

export default SvgCall
