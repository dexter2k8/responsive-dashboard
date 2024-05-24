import "./styles.css";
import { BxBell } from "../../assets/icons/BxBell";
import { BxMenu } from "../../assets/icons/BxMenu";
import { BxSearch } from "../../assets/icons/BxSearch";
import Switch from "./components/Switch";
import logo from "../../assets/logo.png";
import { IHeaderProps } from "./types";

export default function Header({ onMenuClick, onSwitchClick }: IHeaderProps) {
  return (
    <header>
      <BxMenu onClick={onMenuClick} style={{ cursor: "pointer" }} />
      <form action="#">
        <input type="search" placeholder="Search..." />
        <button type="submit">
          <BxSearch />
        </button>
      </form>
      <Switch onClick={onSwitchClick} />
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
