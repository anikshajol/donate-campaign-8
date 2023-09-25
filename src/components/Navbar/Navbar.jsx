import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png";
import "./Navbar.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex  md:max-w-6xl md:mx-auto px-9 justify-between mb-5 items-center">
      <div onClick={() => setOpen(!open)} className="text-4xl md:hidden">
        {open ? (
          <AiOutlineClose></AiOutlineClose>
        ) : (
          <AiOutlineMenu></AiOutlineMenu>
        )}
      </div>
      <img src={logo} className="" alt="" />
      <ul
        className={` flex flex-col md:flex-row md:justify-end absolute md:static duration-1000  ${
          open ? "top-12 mb-10" : "-top-80"
        } gap-3 md:gap-6 font-semibold p-2 rounded-md`}
      >
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/donation"}>Donation</NavLink>
        <NavLink to={"/statistics"}>Statistics</NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
