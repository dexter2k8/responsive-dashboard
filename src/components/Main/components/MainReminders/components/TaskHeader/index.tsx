import { BxFilter } from "../../../../../../assets/icons/BxFilter";
import { BxNote } from "../../../../../../assets/icons/BxNote";
import { BxPlus } from "../../../../../../assets/icons/BxPlus";

export default function TaskHeader() {
  return (
    <div className="order-header">
      <BxNote />
      <h3>Reminders</h3>
      <BxFilter />
      <BxPlus />
    </div>
  );
}
