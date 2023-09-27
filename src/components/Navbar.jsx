import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import logo from "../assets/images/logo.svg";
import arrowDown from "../assets/images/icon-arrow-light.svg";
import iconHamburger from "../assets/images/icon-hamburger.svg";
import "./styles/navbar.css";
import Product from "./linksOptions/Product";
import Company from "./linksOptions/Company";
import Connect from "./linksOptions/Connect";
import MobileNav from "./linksOptions/MobileNav";

const Navbar = () => {
  return (
    <nav className="blogr__navbar">
      <img className="blogr__logo" src={logo} alt="logo" />
      <div className="navbar__mobile">
        <MobileNav iconHamburger={iconHamburger}  />
      </div>
      <>
        <div className="navbar__links">
          <Product arrowDown={arrowDown} />
          <Company arrowDown={arrowDown} />
          <Connect arrowDown={arrowDown} />
        </div>
        <div className="buttons__navbar">
          <Button variant="text" className="navbar__login">
            Login
          </Button>
          <Button variant="text" className="navbar__signup">
            Sign Up
          </Button>
        </div>
      </>
    </nav>
  );
};

export default Navbar;