import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=> {
    if(mode==='light'){
      setMode('dark')
    } else {
      setMode('light')
    }
  }
  return (
    <>
      <Navbar title="Text Utils" about="About Us" mode = {mode} toggleMode={toggleMode}/>
      <Alert alert = "This is alert"/>
      <div className="container my-3">
        <TextForm heading="Enter text to analyze" />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
