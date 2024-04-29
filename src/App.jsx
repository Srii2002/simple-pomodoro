import React from 'react';
import './App.css';
import Timer from "./Timer";

import {useState} from "react";
import SettingsContext from "./SettingsContext";
import SettingsPage from './SettingsPage'; // <--- Add this line

function App() {
  
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <main>
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
      }}>
        {showSettings ? <SettingsPage /> : <Timer />}
      </SettingsContext.Provider>
    </main>
  );
}

export default App;