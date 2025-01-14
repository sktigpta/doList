import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react'; // Import icons for the menu and theme toggle
import { Avatar } from '../ui/Avatar';
import { cn } from '../../lib/utils';
import { ProgressCard } from '../stats/ProgressCard';
import { CalendarCard } from '../stats/CalendarCard';

export const Sidebar = ({ sidebarOpen, setSidebarOpen, darkMode, setDarkMode }) => {
  const [activeItem, setActiveItem] = useState('Home');
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const menuItems = ['Home', 'Personal', 'Work'];

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
    setSidebarOpen(!sidebarOpen);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`relative ${isSidebarVisible ? 'w-70' : 'w-0'} transition-all duration-300 ease-in-out ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} border-r p-4 overflow-y-auto h-screen`}
    >
      <div className="flex flex-row gap-2 absolute top-4 right-4">
        <button
          onClick={toggleTheme}
          className="p-2 bg-gray-200 rounded-full text-gray-600 w-8 h-8 flex items-center justify-center"
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5 text-gray-800" />
          )}
        </button>

        <button
          onClick={toggleSidebar}
          className="p-2 bg-gray-200 rounded-full text-gray-600 w-8 h-8 flex items-center justify-center"
        >
          {isSidebarVisible ? (
            <X className="w-full h-full text-gray-600" />
          ) : (
            <Menu className="w-full h-full text-gray-600" />
          )}
        </button>
      </div>

      <div className={`flex items-center space-x-3 mb-8 ${isSidebarVisible ? '' : 'hidden'}`}>
        <Avatar src="/api/placeholder/40/40" fallback="U" />
        <div className={isSidebarVisible ? '' : 'hidden'}>
          <h2 className="font-semibold">Workspace</h2>
          <p className="text-sm text-gray-500">Personal</p>
        </div>
      </div>

      <nav className={isSidebarVisible ? '' : 'hidden'}>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li
              key={item}
              onClick={() => setActiveItem(item)}
              className={cn(
                "px-3 py-2 rounded-lg cursor-pointer",
                activeItem === item ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-100"
              )}
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 grid grid-cols-1 gap-4">
          <ProgressCard />
          <CalendarCard />
        </div>
      </nav>
    </div>
  );
};
