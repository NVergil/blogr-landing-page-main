import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Company = ({ arrowDown }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        className="navbar__option-button"
        id="company-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Company
        <img className="arrow-down" src={arrowDown} alt="arrow-down" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem className="nav__link" onClick={handleClose}>
          About
        </MenuItem>
        <MenuItem className="nav__link" onClick={handleClose}>
          Team
        </MenuItem>
        <MenuItem className="nav__link" onClick={handleClose}>
          Blog
        </MenuItem>
        <MenuItem className="nav__link" onClick={handleClose}>
          Careers
        </MenuItem>
      </Menu>

    </div>
  );
};

export default Company;
