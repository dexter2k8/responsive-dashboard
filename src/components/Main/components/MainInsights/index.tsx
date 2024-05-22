import InsightCards from "./components/InsightCards";
import { insights } from "./insights";
import "./styles.css";

export default function MainInsights() {
  return (
    <ul className="insights">
      {insights.map((insight, index) => (
        <InsightCards key={index} {...insight} />
      ))}
    </ul>
  );
}
