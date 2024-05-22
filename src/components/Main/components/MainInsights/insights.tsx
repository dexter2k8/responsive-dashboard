import { BxCalendarCheck } from "../../../../assets/icons/BxCalendarCheck";
import { BxDollarCircle } from "../../../../assets/icons/BxDollarCircle";
import { BxLineChart } from "../../../../assets/icons/BxLineChart";
import { BxShowAlt } from "../../../../assets/icons/BxShowAlt";
import { InsightCardsProps } from "./components/InsightCards/types";

export const insights: InsightCardsProps[] = [
  {
    value: "1,074",
    subtitle: "Paid Order",
    children: <BxCalendarCheck />,
    variant: "primary",
  },
  {
    value: "3,944",
    subtitle: "Site Visit",
    children: <BxShowAlt />,
    variant: "warning",
  },
  {
    value: "14,721",
    subtitle: "Searches",
    children: <BxLineChart />,
    variant: "success",
  },
  {
    value: "$6,742",
    subtitle: "Total Sales",
    children: <BxDollarCircle />,
    variant: "danger",
  },
];
