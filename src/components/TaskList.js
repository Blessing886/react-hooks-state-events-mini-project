import React from "react";
import Task from "./Task"

function TaskList({ tasks, onDeleteTask }) {
  console.log("Tasks received by TaskList:", tasks);
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
        key={task.text}
        text={task.text}
        category={task.category}
        onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
