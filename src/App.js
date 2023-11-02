import "./App.css";
import { useState } from "react";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#16191c";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <Router>
      <Navbar
        title="TextUtils"
        home="Home"
        about="About us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/" element={<TextForm
          Heading="Enter your Text below: "
          mode={mode}
          toggleMode={toggleMode}
          showAlert={showAlert}
        />}/>
          <Route exact path="/about" element={<About/>}/>
        </Routes>
        </div>
    </Router>
  );
}
export default App;
