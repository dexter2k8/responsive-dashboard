import "./styles.css";
import { BxCheckCircle } from "../../../../../../assets/icons/BxCheckCircle";
import { BxDotsVerticalRounded } from "../../../../../../assets/icons/BxDotsVerticalRounded";
import { BxXCircle } from "../../../../../../assets/icons/BxXCircle";
import { ITaskProps } from "./types";

export default function Task({ title, completed }: ITaskProps) {
  return (
    <li className={`task-item complete-${completed}`}>
      <div className="task-title">
        {completed ? <BxCheckCircle /> : <BxXCircle />}
        <p>{title}</p>
      </div>
      <BxDotsVerticalRounded />
    </li>
  );
}
