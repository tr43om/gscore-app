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
      d="M5.814 9.506c0-.782.275-1.426.824-1.934.548-.508 1.262-.762 2.14-.762.863 0 1.56.25 2.094.75.549.516.823 1.188.823 2.016 0 .75-.266 1.376-.8 1.876-.548.516-1.27.774-2.164.774h-.023c-.863 0-1.56-.258-2.094-.774-.533-.516-.8-1.165-.8-1.946ZM6.12 30.02V14.359h5.222v15.662H6.12Zm8.116 0h5.223v-8.745c0-.548.062-.97.188-1.267a3.4 3.4 0 0 1 1-1.348c.447-.367 1.007-.55 1.682-.55 1.756 0 2.634 1.18 2.634 3.54v8.37h5.223v-8.98c0-2.313-.549-4.068-1.647-5.264-1.098-1.195-2.548-1.793-4.352-1.793-2.023 0-3.6.867-4.728 2.602v.047h-.024l.024-.047V14.36h-5.223c.031.5.047 2.055.047 4.666 0 2.61-.016 6.275-.047 10.996Z"
      fill="#fff"
    />
  </svg>
);

const Memo = memo(SvgComponent);
export default Memo;
