import "./styles.css";
import OrdersHeader from "./components/OrdersHeader";
import OrdersTable from "./components/OrdersTable";
import { tableData } from "./components/OrdersTable/types";

export default function MainRecentOrders() {
  return (
    <div className="recent-orders">
      <OrdersHeader />
      <OrdersTable data={tableData} />
    </div>
  );
}
