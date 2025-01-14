import React, { useState } from "react";
import './App.css';
import Home from "./pages/Home";
import Sidebar from "./components/layout/Sidebar";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`app min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="flex">
        <Sidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <Home isOpen={isOpen} />
      </div>
    </div>
  );
}

export default App;