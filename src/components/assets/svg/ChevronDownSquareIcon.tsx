
import * as React from "react";
import { SVGProps } from "react";
const ChevronDownSquareIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-chevron-down-square"
    {...props}
  >
    <rect width={18} height={18} x={3} y={3} rx={2} />
    <path d="m16 10-4 4-4-4" />
  </svg>
);
export default ChevronDownSquareIcon;
