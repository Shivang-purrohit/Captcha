import './App.css';
import Navbar from './Navbar';
import Captcha from './Captcha';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light')

  const switchMode = () => {
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#2c3e59'
      
      } else {
        setMode('light');
        document.body.style.backgroundColor = '#f5f5f5'
       
      }
    }


  return (
    <>
    <Navbar mode={mode} switchMode={switchMode}/>
  <Captcha/>
  </>
  );
}

export default App;
