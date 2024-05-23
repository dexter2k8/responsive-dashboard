import "./styles.css";
import { InsightCardsProps } from "./types";

export default function InsightCard({ value, subtitle, children, variant }: InsightCardsProps) {
  return (
    <li className="insight-card">
      <figure className={`card-${variant}`}>{children}</figure>
      <span>
        <h3>{value}</h3>
        <p>{subtitle}</p>
      </span>
    </li>
  );
}
