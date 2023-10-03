import * as React from "react";
import { SVGProps } from "react";
const BarChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={128}
    height={128}
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#DCE2E2"
      d="M478.685 44.5H32a4.5 4.5 0 0 1 0-9h446.685a4.5 4.5 0 0 1 0 9zm4.5 44.918a4.5 4.5 0 0 0-4.5-4.5H32a4.5 4.5 0 0 0 0 9h446.685a4.5 4.5 0 0 0 4.5-4.5zm0 49.418a4.5 4.5 0 0 0-4.5-4.5H32a4.5 4.5 0 0 0 0 9h446.685a4.5 4.5 0 0 0 4.5-4.5zm0 49.418a4.5 4.5 0 0 0-4.5-4.5H32a4.5 4.5 0 0 0 0 9h446.685a4.5 4.5 0 0 0 4.5-4.5zm0 49.418a4.5 4.5 0 0 0-4.5-4.5H32a4.5 4.5 0 0 0 0 9h446.685a4.5 4.5 0 0 0 4.5-4.5zm0 49.418a4.5 4.5 0 0 0-4.5-4.5H32a4.5 4.5 0 0 0 0 9h446.685a4.5 4.5 0 0 0 4.5-4.5zm0 49.418a4.5 4.5 0 0 0-4.5-4.5H32a4.5 4.5 0 0 0 0 9h446.685a4.5 4.5 0 0 0 4.5-4.5zm0 49.418a4.5 4.5 0 0 0-4.5-4.5H32a4.5 4.5 0 0 0 0 9h446.685a4.5 4.5 0 0 0 4.5-4.5zm0 49.418a4.5 4.5 0 0 0-4.5-4.5H32a4.5 4.5 0 0 0 0 9h446.685a4.5 4.5 0 0 0 4.5-4.5z"
    />
    <path
      fill="#FF473E"
      d="M183.96 483.418H82.669V137.39c0-12.364 10.023-22.387 22.387-22.387h56.517c12.364 0 22.387 10.023 22.387 22.387v346.028z"
    />
    <path
      fill="#00B1FF"
      d="M318.431 483.418H217.14V296.187c0-12.364 10.023-22.387 22.387-22.387h56.517c12.364 0 22.387 10.023 22.387 22.387v187.231z"
    />
    <path
      fill="#A97DFF"
      d="M452.902 483.418h-101.29V80.91c0-12.364 10.023-22.387 22.387-22.387h56.517c12.364 0 22.387 10.023 22.387 22.387v402.508z"
    />
    <path
      fill="#B9C5C6"
      d="M478.685 489.418H32a7 7 0 0 1-7-7V40a7 7 0 1 1 14 0v435.418h439.685a7 7 0 1 1 0 14z"
    />
  </svg>
);
export default BarChart;