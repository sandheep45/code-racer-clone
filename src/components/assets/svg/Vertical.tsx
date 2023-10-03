import * as React from "react";
import { SVGProps } from "react";
const Vertical = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="layer1">
      <path
        d="M 9.5 1 L 6 4.5 L 6 6 L 9 3 L 9 18 L 6 15 L 6 16.5 L 9.5 20 L 13 16.5 L 13 15 L 10 18 L 10 3 L 13 6 L 13 4.5 L 9.5 1 z "
        style={{
          fill: "#222222",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 0,
        }}
      />
    </g>
  </svg>
);
export default Vertical;
