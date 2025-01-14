import React from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { TaskForm } from './components/tasks/TaskForm';
import { TaskList } from './components/tasks/TaskList';
import { UserPresence } from './components/collaboration/UserPresence';

const App = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 p-8">
        <div className="w-full mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-semibold">Tasks</h1>
            <UserPresence />
          </div>

          <TaskForm />
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default App;