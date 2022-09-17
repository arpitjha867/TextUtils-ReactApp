import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import About from './components/About'
import {BrowserRouter as Router , Routes ,Route } from 'react-router-dom'

function App() {

  //states 

  const [mode,setMode]=useState("light") //whether dark mode is enabled or not
  const [alert,setAlert]=useState(null)
  const [colorMode,setColorMode]=useState(null)


  //showing alert
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)  
    }, 1500);
  }

  //toggleing between the colors
  const toggleColorMode=(e)=>{
    if(e.target.value==="none"){

      console.log('none has been selected')
      setColorMode("none")

    }else if(e.target.value==="red"){

      console.log('red has been selected')
      setColorMode("red")

    }else if(e.target.value==="green"){

      console.log('green has been selected')
      setColorMode("green")

    }else if(e.target.value==="blue"){

      console.log('blue has been selected')
      setColorMode("blue")

    }
  }
  
  // toggleing between the modes
  const toggleMode=()=>{
    if(mode==='light'){
      document.title="TextUtils - Home(DarkMode)"
      if(colorMode==="none" || colorMode===null)
      {
        setMode('dark')
        document.body.style.backgroundColor='black'
        showAlert("Simple Dark mode has been enabled","success")
      }else if(colorMode==='red'){
        setMode('dark')
        document.body.style.backgroundColor='#430e0e'
        showAlert("Red Dark mode has been enabled","success")
      }else if(colorMode==='green'){
        setMode('dark')
        document.body.style.backgroundColor='#0e300e'
        showAlert("Green Dark mode has been enabled","success")
        
      }else if(colorMode==='blue'){
        setMode('dark')
        document.body.style.backgroundColor='#11113d'
        showAlert("Blue Dark mode has been enabled","success")


      }
    }else{
      document.title="TextUtils - Home(LightMode)"
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success")
    }
  }


  return (
    <> 
    {/* add routers here */}
    <Router>
    <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} toggleColorMode={toggleColorMode}/>
    <Alert alert={alert}/>
        <Routes>
            <Route path="/" element={<TextForm showAlert={showAlert} heading ="Enter the text to analyze" mode={mode}/>}/>
            <Route path="/about" element={<About mode={mode}/>}/>

        </Routes>

    </Router>

    {/* // <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} toggleColorMode={toggleColorMode}/>
    // <Alert alert={alert}/>
    // <div className="container my-3">
    // <TextForm showAlert={showAlert} heading ="Enter the text to analyze" mode={mode}/>
    // </div>

    // <About/> */}
    </>
  );
}
 
export default App;
