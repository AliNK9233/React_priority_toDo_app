
import React, { useState } from 'react';
import './App.css';
import TaskCompleted from './components/TaskCompleted';
import TaskEntry from './components/TaskEntry';
import TaskList from './components/TaskLis';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  };

  const deleteTask  = (taskId) => {setTasks(tasks.filter(task=>task.id !=taskId))}

  const completeTask = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: true } : task
    );
  
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1>Priority To-Do App</h1>
      <TaskEntry onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} onCompleteTask={completeTask}/>
      <TaskCompleted tasks={tasks.filter(task => task.completed)} />
    </div>
  );
}

export default App;