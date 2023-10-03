
import * as React from "react";
import { SVGProps } from "react";
const LoadingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={128}
    height={128}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="none"
      className="stroke-black dark:stroke-white"
      strokeDasharray={15}
      strokeDashoffset={15}
      strokeLinecap="round"
      strokeWidth={2}
      d="M12 3C16.9706 3 21 7.02944 21 12"
    >
      <animate
        fill="freeze"
        attributeName="stroke-dashoffset"
        dur="0.3s"
        values="15;0"
      />
      <animateTransform
        attributeName="transform"
        dur="1.5s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </path>
  </svg>
);
export default LoadingIcon;
