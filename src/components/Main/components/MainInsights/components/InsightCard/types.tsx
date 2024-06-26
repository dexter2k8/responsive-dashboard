import { BxCalendarCheck } from "../../../../../../assets/icons/BxCalendarCheck";
import { BxDollarCircle } from "../../../../../../assets/icons/BxDollarCircle";
import { BxLineChart } from "../../../../../../assets/icons/BxLineChart";
import { BxShowAlt } from "../../../../../../assets/icons/BxShowAlt";

export type InsightCardsVariants = "primary" | "warning" | "success" | "danger";

export interface InsightCardsProps {
  value: string;
  subtitle: string;
  children: React.ReactNode;
  variant?: InsightCardsVariants;
}

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
