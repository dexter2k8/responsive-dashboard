import type { SVGProps } from "react";

export function BxCalendarCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2m.002 16H5V8h14z"
      ></path>
      <path
        fill="currentColor"
        d="m11 17.414l5.707-5.707l-1.414-1.414L11 14.586l-2.293-2.293l-1.414 1.414z"
      ></path>
    </svg>
  );
}
