import { ISideBodyProps } from "./types";

export default function SideBody({ items }: ISideBodyProps) {
  return (
    <ul className="side-body">
      {items.map(({ icon, title }, i) => (
        <li key={i}>
          <a href="#">
            {icon} {title}
          </a>
        </li>
      ))}
    </ul>
  );
}
