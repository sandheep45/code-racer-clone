import * as React from "react";
import { SVGProps } from "react";
const Plus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0zM7 13a1 1 0 1 1 0-2h4V7a1 1 0 1 1 2 0v4l4 .002a1 1 0 0 1 0 2L13 13V17a1 1 0 1 1-2 0v-4H7z"
      fill="#000000"
    />
  </svg>
);
export default Plus;
