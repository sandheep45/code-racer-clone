import * as React from "react";
import { SVGProps } from "react";
const Info = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={128}
    height={128}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#000000"
      d="M142 176a6 6 0 0 1-6 6a14 14 0 0 1-14-14v-40a2 2 0 0 0-2-2a6 6 0 0 1 0-12a14 14 0 0 1 14 14v40a2 2 0 0 0 2 2a6 6 0 0 1 6 6Zm-18-82a10 10 0 1 0-10-10a10 10 0 0 0 10 10Zm106 34A102 102 0 1 1 128 26a102.12 102.12 0 0 1 102 102Zm-12 0a90 90 0 1 0-90 90a90.1 90.1 0 0 0 90-90Z"
    />
  </svg>
);
export default Info;
