import React, { useState } from 'react';

function TaskEntry({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [important, setImportant] = useState(false);
  const [urgent, setUrgent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, important, urgent)
    onAddTask({ title, important, urgent });    
    setTitle('');
    setImportant(false);
    setUrgent(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={important}
          onChange={() => setImportant(!important)}
        /> Important
      </label>
      <label>
        <input
          type="checkbox"
          checked={urgent}
          onChange={() => setUrgent(!urgent)}
        /> Urgent
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskEntry;
