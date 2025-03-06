// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import ErrorPage from './components/ErrorPage';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [toggleText, setToggleText] = useState('Dark Mode')
  const [toggleTextColor, setToggleTextColor] = useState('black')
  const [formContentColor, setFormContentColor] = useState({
    color: 'black',
    backgroundColor: 'white'
  })

  const [alert, setAleart] = useState(null);

  const setDefaultTitle = () => {
    setTimeout(() => {
      document.title = 'TextUtils';
    }, 4000);
  }

  // will change title automtically when mode is change.
  useEffect(() => {
    if (mode === 'dark') {
      setTimeout(() => {
        document.title = 'TextUtils: Dark Mode';
      }, 1000);
      setDefaultTitle();
    }
    else if (mode === 'light') {
      setTimeout(() => {
        document.title = 'TextUtils: Light Mode';
      }, 1000);
      setDefaultTitle();
    }
    else {
      document.title = 'TextUtils';
    }
  }, [mode]);

  const switchMode = () => {
    if (mode ===  'light'){
      setMode('dark')
      setToggleText('Light Mode')
      setToggleTextColor('white')
      setFormContentColor({
        color: 'white',
        backgroundColor: '#283642',
        border: '1px solid white'
      });
      showAlert('success', 'Dark mode is enabled now!');
    }
    else{
      setMode('light')
      setToggleText('Dark Mode')
      setToggleTextColor('black')
      setFormContentColor({
        color: 'black',
        backgroundColor: 'white',
      })
      showAlert('warning', 'Light mode is enabled now!');
      document.title = 'TextUtils'
    }
  };

  const showAlert = (status, message) => {
    setAleart({
      message: message,
      status: status
    })
  }

  return (
    <div style={{color: formContentColor.color, backgroundColor: formContentColor.backgroundColor}}>
      <Router>
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={switchMode} toggleText={toggleText} toggleTextColor={toggleTextColor} />
        <Alert alert={alert} />
        {/* <div className='container my-3'>
          <TextForm heading="Testing Textarea" formContentColor={formContentColor} />
          <TextForm heading="Testing Textarea" showAlert={showAlert} />
        </div> */}
        {/* <div className='container my-3'>
          <About />
        </div> */}

        <div className='container my-3'>
          <Routes>
            <Route path="*" element={<ErrorPage />} /> 
            <Route path="/" element={<TextForm showAlert={showAlert}/>} />
            <Route exact path="/home" element={<TextForm showAlert={showAlert}/>} />
            <Route exact path="/about-us" element={<About formContentColor={formContentColor}/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
