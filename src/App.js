import React, { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/tasks')
      .then(response => response.json())
      .then(data => setTasks(data))
  }, []);

  const handleNewTaskSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title: newTask })
    })
      .then(response => response.json())
      .then(data => setTasks([...tasks, data]))
      .then(() => setNewTask(''));
  }

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <form onSubmit={handleNewTaskSubmit}>
        <input type="text" value={newTask} onChange={event => setNewTask(event.target.value)} />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map(task => (
          <li key={task.title}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

// This code defines a React component that displays a list of tasks and a form for creating new tasks. When the form is submitted, the component sends a POST request to the Flask app to add the new task to the list.