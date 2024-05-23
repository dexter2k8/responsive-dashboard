import "./styles.css";
import { IOrdersTable } from "./types";

export default function OrdersTable({ data }: { data: IOrdersTable[] }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>User</th>
          <th>Order Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>
              <img src={item.image} />
              <p>{item.user}</p>
            </td>
            <td>{item.orderDate}</td>
            <td>
              <span className={`status ${item.status.toLowerCase()}`}>{item.status}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
