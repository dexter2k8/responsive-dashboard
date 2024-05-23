import "./styles.css";
import MainHeader from "./components/MainHeader";
import MainInsights from "./components/MainInsights";
import MainRecentOrders from "./components/MainRecentOrders";
import MainReminders from "./components/MainReminders";

export default function Main() {
  return (
    <main>
      <MainHeader />
      <MainInsights />
      <div className="divider">
        <MainRecentOrders />
        <MainReminders />
      </div>
    </main>
  );
}
