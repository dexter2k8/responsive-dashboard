import { BxCodeAlt } from "../../../../assets/icons/BxCodeAlt";
import "./styles.css";

export default function SideHeader() {
  return (
    <div className="side-header">
      <a href="#">
        <BxCodeAlt />
        <pre>
          <span>D</span>
          exter
        </pre>
      </a>
    </div>
  );
}
