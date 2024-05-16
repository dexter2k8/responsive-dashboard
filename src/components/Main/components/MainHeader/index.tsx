import "./styles.css";
import { BxCloudDownload } from "../../../../assets/icons/BxCloudDownload";

export default function MainHeader() {
  return (
    <div className="header">
      <div className="breadcrumb">
        <h1>Dashboard</h1>
        <a href="#">Analytics</a>
        <span> / </span>
        <a href="#">Sales</a>
      </div>
      <a href="#" className="report">
        <BxCloudDownload />
        <span>Download CSV</span>
      </a>
    </div>
  );
}
