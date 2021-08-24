// import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
import Alerts from './Components/Alerts';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [customColor, setCustomColor] = useState("");
  const [navColor, setNavColor] = useState("");
  const [fontColor, setFontColor] = useState("")

  const showAlert = (message,type)=>{
    setAlert({
      message,
      type
    });
    window.setTimeout(()=>{
      setAlert(null)
    },1500);
  }

  const toggleMode = ()=>{
    if(mode==="dark"){
      setMode("light");
      setNavColor("#f8f9fa")
      setCustomColor("#343a40");
      setFontColor("black")
      document.body.style.backgroundColor="white";
      document.body.style.color="#212529";
      showAlert("Light Mode Enabled","success")
    }else{
      setMode("dark");
      setNavColor("#212529");
      setFontColor("white");
      setCustomColor("#343a40")
      document.body.style.backgroundColor="#343a40";
      document.body.style.color="white";
      showAlert("Dark Mode Enabled","success")
    }
  }

  const darkModeColors = (color,whichColor)=>{
    if(mode === "dark"){
      if(whichColor==="theme"){
        document.body.style.backgroundColor = color;
        setCustomColor(color);
      }else if(whichColor==="nav"){
        setNavColor(color);
      }else{
        setFontColor(color);
        document.body.style.color = color;
       }
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} customColor={customColor} toggleMode={toggleMode} darkModeColors={darkModeColors} navColor={navColor} fontColor={fontColor}/>
    <Alerts alert={alert}/>
    {/* container is a bootstrap class */}
    <div className="container">        
    <Switch>
      <Route exact path="/about">
        <About />
      </Route>
      
      <Route exact path="/">
        <TextForm showAlert={showAlert} title="Enter your text" mode={mode} customColor={customColor} navColor={navColor} fontColor={fontColor}/>
      </Route>
    </Switch>    
    {/* <About/> */}
    </div>
    </Router>
    </>
  );
}

export default App;
