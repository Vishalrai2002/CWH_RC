import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
// import About from './components/About';



// let name="Vishal";


function App() {
  const [mode, setMode] = useState('light'); // whether dark-mode is enabled or not

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }

  return (
  <>

  <Navbar title="TextUtils"abouttext="About"  mode={mode} toggleMode={toggleMode}/>
  <div className="container my-3">
    <TextForm heading="Enter the Text to Analyze below" mode={mode} />
  </div>

  </>
  );
}

export default App;
