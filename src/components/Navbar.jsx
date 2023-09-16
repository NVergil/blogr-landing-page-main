import { Button } from "@mui/material";
import logo from "../assets/images/logo.svg";
import arrowDown from "../assets/images/icon-arrow-light.svg";
import "./styles/navbar.css";
import Product from "./linksOptions/Product";
import Company from "./linksOptions/Company";
import Connect from "./linksOptions/Connect";

const Navbar = () => {
  return (
    <nav className="blogr__navbar">
      <img className="blogr__logo" src={logo} alt="logo" />
      <div className="navbar__links">
        <Product arrowDown={arrowDown} />
        <Company arrowDown={arrowDown} />
        <Connect arrowDown={arrowDown} />
      </div>
      <div className="buttons__navbar">
        <Button variant="text" className="navbar__login">Login</Button>
        <Button variant="text" className="navbar__signup">Sign Up</Button>
      </div>
    </nav>
  );
};

export default Navbar;
