import { ISidebarProps } from "./types";
import SideHeader from "./components/SideHeader";
import SideBody from "./components/SideBody";
import { sideItems } from "./components/sideItems";
import SideFooter from "./components/SideFooter";

export default function Sidebar(props: ISidebarProps) {
  return (
    <div className="sidebar">
      <SideHeader />
      <SideBody items={sideItems} />
      <SideFooter />
    </div>
  );
}
