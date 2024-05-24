import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  };

  return (
    <div className="app">
      <Sidebar collapsed={collapsed} />
      <div className={`content-${collapsed}`}>
        <Header onMenuClick={() => setCollapsed(!collapsed)} onSwitchClick={toggleDarkMode} />
        <Main />
      </div>
    </div>
  );
}

export default App;
