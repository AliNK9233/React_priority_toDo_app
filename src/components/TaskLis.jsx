// src/TaskList.js
import React from 'react';
import './TaskList.css';

function TaskList({ tasks,onDeleteTask,onCompleteTask }) {
    console.log(tasks)
  const tppTasks = tasks.filter(task => task.important && task.urgent && task.completed === false);
  const mpTasks = tasks.filter(task => task.important && !task.urgent && task.completed === false);
  const lpTasks = tasks.filter(task => !task.important && task.urgent && task.completed === false);
  const npTasks = tasks.filter(task => !task.important && !task.urgent && task.completed === false);

  const handleDelete = (taskId) => {
    console.log("taskId "+taskId)
    onDeleteTask(taskId);
  };

  const handleUpdate = (taskId) => {
    console.log("taskId "+taskId)
    onCompleteTask(taskId)
  };

  return (
    <div className="task-list-container">
      <h2>Task List</h2>
      <div className="task-lists">
        <ul className="task-list">
          <h3>(Do)Top Priority</h3>
          {tppTasks.map(task => (
            <li key={task.id}>
              {task.title}
              <input type="checkbox" onChange={()=>  handleUpdate (task.id)} />
              <i className="fas fa-trash" onClick={() => handleDelete(task.id)}></i>
            </li>
          ))}
        </ul>
        <ul className="task-list">
          <h3>Schedule</h3>
          {mpTasks.map(task => (
            <li key={task.id}>
              {task.title}
              <input type="checkbox" onChange={()=>  handleUpdate (task.id)} />
              <i className="fas fa-trash" onClick={() => handleDelete(task.id)}></i>
            </li>
          ))}
        </ul>
        <ul className="task-list">
          <h3>Deligate</h3>
          {lpTasks.map(task => (
            <li key={task.id}>
              {task.title}
              <input type="checkbox" onChange={()=>  handleUpdate (task.id)} />
              <i className="fas fa-trash" onClick={() => handleDelete(task.id)}></i>
            </li>
          ))}
        </ul>
        <ul className="task-list">
          <h3>Eliminate</h3>
          {npTasks.map(task => (
            <li key={task.id}>
              {task.title}
              <input type="checkbox" onChange={()=>  handleUpdate (task.id)} />
              <i className="fas fa-trash" onClick={() => handleDelete(task.id)}></i>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskList;
