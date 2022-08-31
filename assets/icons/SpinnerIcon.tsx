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
      d="M17 9a8 8 0 1 1-2.343-5.657"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);

const Memo = memo(SvgComponent);
export default Memo;
