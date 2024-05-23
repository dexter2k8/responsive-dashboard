import "./styles.css";
import Task from "./components/Task";
import { tasks } from "./components/Task/types";
import TaskHeader from "./components/TaskHeader";

export default function MainReminders() {
  return (
    <div className="reminders">
      <TaskHeader />
      <ul className="task-list">
        {tasks.map(({ ...task }, index) => (
          <Task key={index} {...task} />
        ))}
      </ul>
    </div>
  );
}
