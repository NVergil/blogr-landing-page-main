import { Button } from "@mui/material";
import { useState } from "react";
import iconArrowDark from "../../assets/images/icon-arrow-dark.svg";

const MobileNav = ({ iconHamburger }) => {
  const [open, setOpen] = useState(false);
  const [openProduct, setOpenProduct] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);
  const [openConnect, setOpenConnect] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleOpenOption = (e) => {
    if (e.target.matches(".product") || e.target.matches(".product *")) {
      setOpenProduct(!openProduct);
    }
    if (e.target.matches(".company") || e.target.matches(".company *")) {
      setOpenCompany(!openCompany);
    }
    if (e.target.matches(".connect") || e.target.matches(".connect *")) {
      setOpenConnect(!openConnect);
    }
  }

  const handleCloseOption = () => {
    setOpen(false);
    if (openProduct || openCompany || openConnect) {
      setOpenProduct(false);
      setOpenCompany(false);
      setOpenConnect(false);
    }
  }

  return (
    <>
      <Button variant="text" className="mobile__button" onClick={handleClick}>
        <img src={iconHamburger} alt="" />
      </Button>
      <>
        <ul
          className={`mobile__nav-container ${open && "open"}`}
        >
          <Button variant="text" className="mobile__button-option product" onClick={handleOpenOption}>
            Product
            <img className={`icon-arrow-dark ${openProduct && "rotate"}`} src={iconArrowDark} alt="" />
          </Button>
          <li className={`mobile__nav-group-container ${openProduct && "open"}`}>
            <ul>
              <li className="nav__link" onClick={handleCloseOption}>Overview</li>
              <li className="nav__link" onClick={handleCloseOption}>Pricing</li>
              <li className="nav__link" onClick={handleCloseOption}>Marketplace</li>
              <li className="nav__link" onClick={handleCloseOption}>Features</li>
              <li className="nav__link" onClick={handleCloseOption}>Integrations</li>
            </ul>
          </li>
          <Button variant="text" className="mobile__button-option company" onClick={handleOpenOption}>
            Company
            <img className={`icon-arrow-dark ${openCompany && "rotate"}`} src={iconArrowDark} alt="" />
          </Button>
          <li className={`mobile__nav-group-container ${openCompany && "open"}`}>
            <ul>
              <li className="nav__link" onClick={handleCloseOption}>About</li>
              <li className="nav__link" onClick={handleCloseOption}>Team</li>
              <li className="nav__link" onClick={handleCloseOption}>Blog</li>
              <li className="nav__link" onClick={handleCloseOption}>Careers</li>
            </ul>
          </li>
          <Button variant="text" className="mobile__button-option connect" onClick={handleOpenOption}>
            Connect
            <img className={`icon-arrow-dark ${openConnect && "rotate"}`} src={iconArrowDark} alt="" />
          </Button> 
          <li className={`mobile__nav-group-container ${openConnect && "open"}`}>
            <ul>
              <li className="nav__link" onClick={handleCloseOption}>Contact</li>
              <li className="nav__link" onClick={handleCloseOption}>Newsletter</li>
              <li className="nav__link" onClick={handleCloseOption}>LinkedIn</li>
            </ul>
          </li>
          <li>
          <div className="buttons__mobile-navbar">
          <div className="separator"></div>
            <Button variant="text" className="navbar__login">
              Login
            </Button>
            <Button variant="text" className="navbar__signup">
              Sign Up
            </Button>
          </div>
          </li>
        </ul>
      </>
    </>
  );
};

export default MobileNav;
