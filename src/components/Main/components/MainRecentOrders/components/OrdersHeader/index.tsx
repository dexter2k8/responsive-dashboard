import "./styles.css";
import { BxFilter } from "../../../../../../assets/icons/BxFilter";
import { BxReceipt } from "../../../../../../assets/icons/BxReceipt";
import { BxSearch } from "../../../../../../assets/icons/BxSearch";

export default function OrdersHeader() {
  return (
    <div className="order-header">
      <BxReceipt />
      <h3>Recent Orders</h3>
      <BxFilter />
      <BxSearch />
    </div>
  );
}
