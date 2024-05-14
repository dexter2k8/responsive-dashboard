import "./styles.css";
import { ISidebarProps } from "./types";
import SideHeader from "./components/SideHeader";
import SideBody from "./components/SideBody";
import { sideItems } from "./components/sideItems";
import SideFooter from "./components/SideFooter";

export default function Sidebar({ collapsed }: ISidebarProps) {
  const sidebarClass = `sidebar ${collapsed ? "collapsed" : ""}`;

  return (
    <nav className={sidebarClass}>
      <SideHeader />
      <SideBody items={sideItems} />
      <SideFooter />
    </nav>
  );
}
