import type { SVGProps } from "react";

export function BxLineChart(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M3 3v17a1 1 0 0 0 1 1h17v-2H5V3z"></path>
      <path
        fill="currentColor"
        d="M15.293 14.707a.999.999 0 0 0 1.414 0l5-5l-1.414-1.414L16 12.586l-2.293-2.293a.999.999 0 0 0-1.414 0l-5 5l1.414 1.414L13 12.414z"
      ></path>
    </svg>
  );
}
