import React, { useEffect, useState } from 'react';
import { TaskForm } from '../components/tasks/TaskForm';
import { TaskList } from '../components/tasks/TaskList';

const Home = ({ isOpen }) => {
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setDarkMode(savedTheme === 'dark');
        } else {
            setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
    }, []);
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);
    return (
        <main
            className={`
        transition-all duration-300 ease-in-out pl-6
        ${isOpen ? 'ml-60' : 'ml-0'}
        w-[calc(100%-${isOpen ? '16rem' : '0rem'})]
      `}
        >
            <div className="p-8 pt-6">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold">To Do List</h2>
                   
                </div>
                <TaskForm />
                <TaskList />
            </div>
        </main>

    );
};

export default Home;