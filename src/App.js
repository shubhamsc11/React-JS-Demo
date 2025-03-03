// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light');
  const [toggleText, setToggleText] = useState('Dark Mode')
  const [toggleTextColor, setToggleTextColor] = useState('black')
  const [formContentColor, setFormContentColor] = useState({
    color: 'black',
    backgroundColor: 'white'
  })

  const [alert, setAleart] = useState(null);

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
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={switchMode} toggleText={toggleText} toggleTextColor={toggleTextColor} />
      <Alert alert={alert} />
      <div className='container my-3'>
        {/* <TextForm heading="Testing Textarea" formContentColor={formContentColor} /> */}
        <TextForm heading="Testing Textarea" />
      </div>
      {/* <div className='container my-3'>
        <About />
      </div> */}
    </div>
  );
}

export default App;
