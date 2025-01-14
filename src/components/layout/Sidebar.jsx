import React from 'react';
import {
  ListTodo,
  CalendarDays,
  Star,
  Users,
  Plus,
  Menu,
  Moon,
  Sun,
  X
} from 'lucide-react';
import { ProgressCard } from '../stats/ProgressCard';
import useTodoStore from '../../store/todoStore';

const Sidebar = ({ isOpen, setIsOpen, darkMode, setDarkMode }) => {
  const menuItems = [
    { icon: <ListTodo size={20} />, label: 'All Tasks' },
    { icon: <CalendarDays size={20} />, label: 'Today', active: true },
    { icon: <Star size={20} />, label: 'Important' },
    { icon: <CalendarDays size={20} />, label: 'Planned' },
    { icon: <Users size={20} />, label: 'Assigned to me' },
  ];

  // Access the tasks array from your store
  const tasks = useTodoStore((state) => state.tasks);

  return (
    <div className={darkMode ? 'dark' : ''}>
      {/* Toggle Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          fixed top-5 z-50 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700
          ${isOpen ? 'left-48' : 'left-4'}
        `}
      >
        {isOpen ? <X size={10} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-screen w-64 
          bg-gray-50 dark:bg-neutral-900 
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          flex flex-col
          border-r border-gray-200 dark:border-neutral-800
        `}
      >
        {/* Profile Section */}
        <div className="p-4 pb-6 flex items-center mt-8">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
            <img
              src="https://portfolio.shaktidhar.pigoo.in/assets/sktigpta-tTFbwdjC.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-sm font-medium dark:text-white">Hey, ABCD</div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1">
          <ul className="space-y-1 px-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`
                    flex items-center px-4 py-2.5 text-sm rounded-lg
                    ${item.active
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-500'
                      : 'hover:bg-gray-100 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300'
                    }
                  `}
                >
                  <span className={`mr-3 ${item.active ? 'text-green-600 dark:text-green-500' : ''}`}>
                    {item.icon}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
            <ProgressCard />
          </ul>
        </nav>

        {/* Add List Button */}
        <div className="p-4">
          <button className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <Plus size={20} className="mr-3" />
            Add list
          </button>
        </div>

        {/* Today's Tasks Counter */}
        <div className="p-4 border-t border-gray-200 dark:border-neutral-800">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Today Tasks</div>
              <div className="text-2xl font-semibold dark:text-white">
                {/* Display the number of tasks */}
                {tasks.length}
              </div>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white p-2 rounded-lg"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
