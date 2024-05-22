export type InsightCardsVariants = "primary" | "warning" | "success" | "danger";

export interface InsightCardsProps {
  value: string;
  subtitle: string;
  children: React.ReactNode;
  variant?: InsightCardsVariants;
}
