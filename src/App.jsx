import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Project files
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Category from "./pages/Category";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Product from "./pages/Product";
import "./styles/style.css";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/:title" element={<Category />} />
        <Route path="/:title/:id" element={<Product />} />
      </Routes>
      <Footer />
    </Router>
  );
}
