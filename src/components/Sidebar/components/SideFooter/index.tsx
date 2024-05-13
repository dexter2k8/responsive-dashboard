import { BxLogOut } from "../../../../assets/icons/BxLogOut";
import "./styles.css";

export default function SideFooter() {
  return (
    <div className="side-footer">
      <a href="#">
        <BxLogOut /> Logout
      </a>
    </div>
  );
}
