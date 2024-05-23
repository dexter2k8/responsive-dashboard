import user1 from "../../../../../../assets/users/user-1.jpg";
import user2 from "../../../../../../assets/users/user-2.jpg";
import user3 from "../../../../../../assets/users/user-3.jpg";

export interface IOrdersTable {
  image: string;
  user: string;
  orderDate: string;
  status: string;
}

export const tableData: IOrdersTable[] = [
  {
    image: user1,
    user: "Jane Doe",
    orderDate: "12-06-2023",
    status: "Completed",
  },
  {
    image: user2,
    user: "John Doe",
    orderDate: "13-07-2023",
    status: "Pending",
  },
  {
    image: user3,
    user: "Joseph Doe",
    orderDate: "14-08-2023",
    status: "Processing",
  },
];
