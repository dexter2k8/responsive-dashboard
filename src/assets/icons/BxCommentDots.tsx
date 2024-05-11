import type { SVGProps } from "react";

export function BxCommentDots(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 14H6.667L4 18V4h16z"
      ></path>
      <circle cx={15} cy={10} r={2} fill="currentColor"></circle>
      <circle cx={9} cy={10} r={2} fill="currentColor"></circle>
    </svg>
  );
}
