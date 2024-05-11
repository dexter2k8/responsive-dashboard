import { BxAnalyse } from "../../../assets/icons/BxAnalyse";
import { BxCog } from "../../../assets/icons/BxCog";
import { BxCommentDots } from "../../../assets/icons/BxCommentDots";
import { BxGridAlt } from "../../../assets/icons/BxGridAlt";
import { BxGroup } from "../../../assets/icons/BxGroup";
import { BxStoreAlt } from "../../../assets/icons/BxStoreAlt";
import { ISideItem } from "./SideBody/types";

export const sideItems: ISideItem[] = [
  {
    icon: <BxGridAlt />,
    title: "Dashboard",
  },
  {
    icon: <BxStoreAlt />,
    title: "Shop",
  },
  {
    icon: <BxAnalyse />,
    title: "Analytics",
  },
  {
    icon: <BxCommentDots />,
    title: "Tickets",
  },
  {
    icon: <BxGroup />,
    title: "Users",
  },
  {
    icon: <BxCog />,
    title: "Settings",
  },
];
