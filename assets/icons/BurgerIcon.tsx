import * as React from "react";
import { SVGProps, memo } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      d="M4 5h16M4 12h16M4 19h16"
    />
  </svg>
);

const Memo = memo(SvgComponent);
export default Memo;
