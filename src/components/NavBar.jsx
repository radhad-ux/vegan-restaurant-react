import { Link } from "react-router-dom";
import LOGO from "../assets/logo.png";

export default function NavBar() {
  return (
    <nav className="navbar_links">
      <div className="navbar_left">
        <Link to="/">
          <img className="navbar_img" src={LOGO} alt="" />
        </Link>
        <h3 className="navbar_title">The Green Alley</h3>
      </div>
      <div className="navbar_right">
        <Link to="/">Home</Link>
        <Link to="/Dishes">Dishes</Link>
        <Link to="/Desserts">Deserts</Link>
        <Link to="/Drinks">Drinks</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </nav>
  );
}
