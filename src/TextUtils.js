import { useState } from 'react'
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import './StyleSheets/Global.css'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'


function App() {

  //To set alerts
  const [alert, setAlertMsg] = useState(null) //?Shortcut uses
  const showAlerts = (message, type) => {
    setAlertMsg({
      msg: message, //! Initializing alert message 
      type: type
    })
    setTimeout(() => {
      setAlertMsg(null);
    }, 1500);
  }


  //To set theme.
  const [Mode, setMode] = useState("dark"); //Whether dark mode is enabled or not.                                    
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      document.getElementById('myBox').style.background = "black";
      document.getElementById('myBox').style.color = "white";
      showAlerts("Dark mode enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.getElementById('myBox').style.background = "white";
      document.getElementById('myBox').style.color = "black";
      showAlerts("Light mode enabled", "success");
    }
  }

  //Multi Themed functions
  const red = () => {
    setMode("dark")
    document.body.style.backgroundColor = "red";
    document.body.style.color = "#fff";
    for (let i = 1; i <= 6; i++) {
      document.getElementById(`as-${i}`).style.background = "red";
      document.getElementById(`as-${i}`).style.color = "white";
    }
    document.getElementById('myBox').style.background = "red";
    document.getElementById('myBox').style.color = "white";
    document.title = 'TextUtils - Crimson Mode';
    showAlerts("Navbar won't Change while changing theme 🙂", "warning");
  }
  const white = () => {
    setMode("dark")
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";


    // document.getElementById('Nav-Ball').style.background="#ff3a3a";
    // document.getElementById('Nav-Ball').style.color="white !important";
    document.getElementById('myBox').style.background = "white";
    document.getElementById('myBox').style.color = "black";
    for (let i = 1; i <= 6; i++) {
      document.getElementById(`as-${i}`).style.background = "black";
      document.getElementById(`as-${i}`).style.color = "white";
    }
    showAlerts("Navbar won't Change while changing theme 🙂", "warning");
    document.title = 'TextUtils - Light Mode';
  }

  const blue = () => {
    document.body.style.backgroundColor = "#0632c3";
    document.body.style.color = "#fff";
    document.getElementById('myBox').style.background = "#0632c3";
    document.getElementById('myBox').style.color = "white";

    // document.getElementById('Nav-Ball').style.background="#1b49e3";
    // document.getElementById('Nav-Ball').style.color="white";
    for (let i = 1; i <= 6; i++) {
      document.getElementById(`as-${i}`).style.background = "#0632c3";
      document.getElementById(`as-${i}`).style.color = "white";
    }
    showAlerts("Navbar won't Change while changing theme 🙂", "warning");
    document.title = 'TextUtils - Navy Mode';
  }

  const green = () => {
    document.body.style.backgroundColor = "#00812d";
    document.body.style.color = "#fff";
    document.getElementById('myBox').style.background = "green";
    document.getElementById('myBox').style.color = "white";

    // document.getElementById('Nav-Ball').style.background="#00c344";
    // document.getElementById('Nav-Ball').style.color="white";
    for (let i = 1; i <= 6; i++) {
      document.getElementById(`as-${i}`).style.background = "#00812d";
      document.getElementById(`as-${i}`).style.color = "white";
    }
    showAlerts("Navbar won't Change while changing theme 🙂", "warning");
    document.title = 'TextUtils - Eco Mode';
  }

  const yellow = () => {
    document.body.style.backgroundColor = "#c4c402";
    document.body.style.color = "#fff";
    document.getElementById('myBox').style.background = "#c4c402";
    document.getElementById('myBox').style.color = "black";

    // document.getElementById('Nav-Ball').style.background="#f9f900";
    for (let i = 1; i <= 6; i++) {
      document.getElementById(`as-${i}`).style.background = "#c4c402";
      document.getElementById(`as-${i}`).style.color = "white";
    }
    showAlerts("Navbar won't Change while changing theme 🙂", "warning");
    document.title = 'TextUtils - Beam Mode';
  }

  const dark = () => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "#fff";
    document.getElementById('myBox').style.background = "black";
    document.getElementById('myBox').style.color = "white";

    // document.getElementById('Nav-Ball').style.background="#282727";
    // document.getElementById('Nav-Ball').style.color="white";
    for (let i = 1; i <= 6; i++) {
      document.getElementById(`as-${i}`).style.background = "black";
      document.getElementById(`as-${i}`).style.color = "white";
    }
    showAlerts("Navbar won't Change while changing theme 🙂", "warning");
    document.title = 'TextUtils - Dark Mode';
  }


  return (
    <>
      <Router>
        {/*  The things which we are declaring here is props */}
        {/* By default about is passed using about props */}
        <Navbar title="TextUtils"
          mode={Mode}
          toggleMode={toggleMode}
          red={red}
          blue={blue}
          green={green}
          yellow={yellow}
          dark={dark}
          white={white} />
        <Alert alert={alert} />
        <div className="container">

          {/* //*Use of exact  */}
          {/* /users --> component-1
/users/profile --> component-2 */}
          {/* If exact won't be there then it will rendered to the component 1 on about/Profile */}
          <Routes>
            <Route exact path='/about' element={<About />} />
            <Route exact path='/' element={<TextForm heading="Enter your text to analyze" showAlerts={showAlerts} mode={Mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;
