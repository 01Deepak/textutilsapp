// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import { Router } from 'react-router';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";


function App() {
const [mode, setmode] = useState('light');
 
const [alert, setAlert] = useState(null);

const showAlert=(type,message)=>{
  setAlert({
    msg:message,
    msgtype:type
  })
  setTimeout(()=>{
   setAlert(null);
  },1500);
}

const toggleMode=(colorName)=>{
  romoveBodyClass();
 document.body.classList.add('bg-'+colorName);
  console.log(colorName);
  // alert("toggle mode fired");
  if (mode==='light') {
    setmode('dark');
    document.body.style.backgroundColor='black';
    showAlert("success","Dark mode Enabled");
  }
  else{
    setmode('light');
    document.body.style.backgroundColor='white';
    showAlert("success","Light mode Enabled");
  }
 
}

const romoveBodyClass=()=>{
document.body.classList.remove("bg-primary");
document.body.classList.remove("bg-danger");
document.body.classList.remove("bg-success");
document.body.classList.remove("bg-warning");
document.body.classList.remove("bg-black");
document.body.classList.remove("bg-white");
}
  return (
    <>
    <Router>
    <Navbar title="TextUtil" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <div style={{height:50+'px'}}>
    <Alert Alert={alert}/>
    </div>
    <Switch>
          <Route path="/about">
          <div className="container my-3">
          <About mode={mode}/>
          </div>

          </Route>
         
          <Route path="/">
          <div className="container my-3">
          <TextForm showAlert={showAlert} heading="Enter text to Analyze" mode={mode}/>
          </div>
          </Route>
        </Switch>
    </Router>
    
   
    </>
  );
}

export default App;
