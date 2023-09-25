import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center">
      <img src={logo} alt="" />
      <ul className="flex gap-10">
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/donation"}>Donation</NavLink>
        <NavLink to={"/statistics"}>Statistics</NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
