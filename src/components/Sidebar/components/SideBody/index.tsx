import "./styles.css";
import { ISideBodyProps } from "./types";
import { useState } from "react";

export default function SideBody({ items }: ISideBodyProps) {
  const [active, setActive] = useState(0);
  return (
    <ul className="side-body">
      {items.map(({ icon, title }, i) => (
        <li key={i} className={active === i ? "active" : ""}>
          <a href="#" onClick={() => setActive(i)}>
            {icon} {title}
          </a>
        </li>
      ))}
    </ul>
  );
}
