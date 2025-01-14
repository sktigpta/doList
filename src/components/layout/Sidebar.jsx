import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Import Menu (hamburger) and Cross icons
import { Avatar } from '../ui/Avatar';
import { cn } from '../../lib/utils';
import { ProgressCard } from '../stats/ProgressCard';
import { CalendarCard } from '../stats/CalendarCard'; // Ensure this is imported

export const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Home'); // Track active menu item
  const [isSidebarVisible, setIsSidebarVisible] = useState(true); // Sidebar visibility state
  const menuItems = ['Home', 'Personal', 'Work'];

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible); // Toggle sidebar visibility
  };

  return (
    <div className="relative width-70">
      {/* Button to toggle sidebar */}
      <button
        onClick={toggleSidebar}
        className="p-2 absolute top-4 right-4 bg-gray-200 rounded-full text-gray-600 w-6 h-6 flex items-center justify-center"
      >
        {/* Display Menu icon when sidebar is hidden, and Cross icon when sidebar is visible */}
        {isSidebarVisible ? (
          <X className="w-full h-full text-gray-600" />
        ) : (
          <Menu className="w-full h-full text-gray-600" />
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`transition-all duration-300 ease-in-out ${isSidebarVisible ? 'w-70' : 'w-0'} bg-white border-r p-4 overflow-hidden h-screen`}
      >
        {/* Sidebar content */}
        <div className={`flex items-center space-x-3 mb-8 ${isSidebarVisible ? '' : 'hidden'}`}>
          <Avatar 
            src="/api/placeholder/40/40"
            fallback="U"
          />
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
    </div>
  );
};
