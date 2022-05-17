import React from "react";
import Task from "./Task";

function TaskList({tasks, onDeletingTask}) {
  const taskList = tasks.map((task)=>(
    <Task key = {task.test}
    text={task.text}
    category={task.category}
    onDeletingTask={onDeletingTask}
    />
  ));
  return (
    <div className="tasks">{taskList}
      {/* display a list of tasks using Task component */}

    </div>
  );
}

export default TaskList;
