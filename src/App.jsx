import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Project files
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import "./styles/style.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
