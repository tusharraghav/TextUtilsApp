import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
   
  // show Alert function
  const showALert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  
  // Change it to dark else change it to light 
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = '#042743';
      showALert("Dark mode has been enabled", "success");
      // document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.background = 'white';
      showALert("Light mode has been enabled", "success");
      // document.title = 'TextUtils - Dark Mode';
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/" element={<TextForm showALert={showALert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
