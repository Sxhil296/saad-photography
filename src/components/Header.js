import React from "react";
import Socials from "./Socials";
import logo from "../img/header/logo.svg";
// import logo from "../img/header/s-logo.png";

import MobileNav from "./MobileNav";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center bg-white lg:bg-transparent">
        <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
          {/* logo */}
          <Link to={"/"} className="max-w-[200px]">
            <img src={logo} alt="logo of Aline Lee" />
          </Link>

          {/* nav - intially hidden - show on desktop mode */}
          <nav className="hidden xl:flex gap-x-12 font-semibold">
            <Link
              to="/"
              className="text-[#696c6d] hover:text-primary transition"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-[#696c6d] hover:text-primary transition"
            >
              About
            </Link>
            <Link
              to="/portfolio"
              className="text-[#696c6d] hover:text-primary transition"
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className="text-[#696c6d] hover:text-primary transition"
            >
              Contact
            </Link>
          </nav>
        </div>
        {/* socials */}
        <Socials />
        {/* Mobile nav */}
        <MobileNav />
      </header>
    </>
  );
};

export default Header;
