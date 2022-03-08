import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Project files
import NavBar from "./components/NavBar";
import "./styles/style.css";

function App() {
  return (
    <Router>
      <NavBar />
    </Router>
  );
}

export default App;
