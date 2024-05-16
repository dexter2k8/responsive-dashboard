import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="app">
      <Sidebar collapsed={collapsed} />
      <div className="content">
        <Header onMenuClick={() => setCollapsed(!collapsed)} />
        <Main />
      </div>
    </div>
  );
}

export default App;
