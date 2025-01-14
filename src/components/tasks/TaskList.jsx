import React, { useState } from 'react';
import { LayoutGrid, LayoutList } from 'lucide-react';
import { TaskItem } from './TaskItem';
import useTodoStore from '../../store/todoStore';
import { Card, CardContent } from '../ui/Card';

export const TaskList = () => {
  const tasks = useTodoStore((state) => state.tasks);
  const [layout, setLayout] = useState('full');

  const completedTasks = tasks.filter((task) => task.completed);
  const incompleteTasks = tasks.filter((task) => !task.completed);

  const toggleLayout = (newLayout) => {
    setLayout(newLayout);
  };

  return (
    <Card className="flex-grow w-full">
      <CardContent className="w-full">
        <div className="flex justify-end space-x-3 m-4 mr-0">
          <button
            onClick={() => toggleLayout('full')}
            className={`p-2 rounded-full ${layout === 'full' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'} hover:bg-blue-400`}
          >
            <LayoutList className="w-5 h-5" />
          </button>
          <button
            onClick={() => toggleLayout('medium')}
            className={`p-2 rounded-full ${layout === 'medium' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'} hover:bg-blue-400`}
          >
            <LayoutGrid className="w-5 h-5" />
          </button>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Incomplete Tasks</h3>
          <div className={`grid gap-4 ${layout === 'full' ? 'grid-cols-1' : 'grid-cols-3'}`}>
            {incompleteTasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Completed Tasks</h3>
          <div className={`grid gap-4 ${layout === 'full' ? 'grid-cols-1' : 'grid-cols-3'}`}>
            {completedTasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
