import React, { useState } from 'react';
import useTodoStore from '../../store/todoStore';

export const TaskForm = () => {
  const [newTask, setNewTask] = useState('');
  const addTask = useTodoStore((state) => state.addTask);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    addTask(newTask);
    setNewTask('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task..."
        className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </form>
  );
};