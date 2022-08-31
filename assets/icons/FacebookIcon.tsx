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
      d="M20.002 30.723V19.494h3.959l.593-4.376h-4.552v-2.794c0-1.267.37-2.13 2.278-2.13l2.434-.001V6.279c-.421-.053-1.866-.173-3.547-.173-3.51 0-5.912 2.04-5.912 5.785v3.227h-3.969v4.376h3.97v11.23h4.746Z"
      fill="#fff"
    />
  </svg>
);

const Memo = memo(SvgComponent);
export default Memo;
