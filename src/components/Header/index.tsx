import { BxBell } from "../../assets/icons/BxBell";
import { BxMenu } from "../../assets/icons/BxMenu";
import { BxSearch } from "../../assets/icons/BxSearch";
import Switch from "./components/Switch";
import "./styles.css";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header>
      <BxMenu style={{ cursor: "pointer" }} />
      <form action="#">
        <input type="search" placeholder="Search..." />
        <button type="submit">
          <BxSearch />
        </button>
      </form>
      <Switch />
      <a href="#" className="notification">
        <BxBell />
        <span className="count">12</span>
      </a>
      <a href="#" className="profile">
        <img src={logo} />
      </a>
    </header>
  );
}
