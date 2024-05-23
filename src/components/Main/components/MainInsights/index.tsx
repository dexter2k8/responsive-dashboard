import InsightCard from "./components/InsightCard";
import { insights } from "./components/InsightCard/types";
import "./styles.css";

export default function MainInsights() {
  return (
    <ul className="insights">
      {insights.map((insight, index) => (
        <InsightCard key={index} {...insight} />
      ))}
    </ul>
  );
}
