// src/TaskCompleted.js
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './TaskCompleted.css';

function TaskCompleted({ tasks }) {

  const completedTasks = tasks.filter(task => task.completed == true);

  return (
    <div>
      <h2>Task Completed</h2>
      <ul className="completed-task-list">
        {tasks.map(task => (
          <li key={task.id}>
            {task.title}
            <button className="delete-button">
              <i className="fas fa-trash"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskCompleted;
