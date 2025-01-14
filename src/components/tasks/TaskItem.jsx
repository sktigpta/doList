import React from 'react';
import { Star, Trash } from 'lucide-react';
import useTodoStore from '../../store/todoStore';

export const TaskItem = ({ task }) => {
  const { toggleTask, deleteTask, toggleFavorite } = useTodoStore();

  return (
    <div className="flex items-center justify-between p-4 hover:bg-gray-100 rounded-lg shadow-sm mb-3">
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          className="w-5 h-5 rounded-full border-gray-300 focus:ring-0"
        />
        <div>
          {!task.completed && task.favorite && (
            <span className="text-xs text-yellow-500 bg-yellow-100 py-1 px-2 rounded-full mb-1 inline-block">
              Favorite
            </span>
          )}
          <span className={`${task.completed ? 'text-gray-500' : 'text-gray-700'} text-base`}>
            {task.text}
          </span>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <button
          onClick={() => toggleFavorite(task.id)}
          className={`p-2 rounded-full ${task.favorite ? 'text-yellow-500' : 'text-gray-600'} hover:text-yellow-500 focus:ring-0`} // No blue border, yellow on click
        >
          <Star className="w-5 h-5" />
        </button>

        <button
          onClick={() => deleteTask(task.id)}
          className="p-2 rounded-full bg-red-500 text-white hover:bg-red-400 focus:ring-0"
        >
          <Trash className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
