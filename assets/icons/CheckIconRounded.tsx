import * as React from "react";
import { SVGProps, memo } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13 26.231c7.18 0 13-5.82 13-13s-5.82-13-13-13-13 5.82-13 13 5.82 13 13 13Z"
      fill="#fff"
    />
    <path
      d="m7.117 14.072 3.362 3.362 8.404-8.405"
      stroke="#272727"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Memo = memo(SvgComponent);
export default Memo;
