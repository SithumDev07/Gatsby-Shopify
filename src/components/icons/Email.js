import * as React from "react"

function SvgEmail(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="email_svg__icon email_svg__icon-tabler email_svg__icon-tabler-mailbox"
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
      <path d="M10 21v-6.5a3.5 3.5 0 00-7 0V21h18v-6a4 4 0 00-4-4H6.5" />
      <path d="M12 11V3h4l2 2-2 2h-4M6 15h1" />
    </svg>
  )
}

export default SvgEmail
