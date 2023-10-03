import * as React from "react";
import { SVGProps } from "react";
const Laptop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={128}
    height={128}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#000000"
      d="M4.5 5A1.5 1.5 0 0 0 3 6.5v6A1.5 1.5 0 0 0 4.5 14h11a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 15.5 5h-11Zm-2 10a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Z"
    />
  </svg>
);
export default Laptop;
