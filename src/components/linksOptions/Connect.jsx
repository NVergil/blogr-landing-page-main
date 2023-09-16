import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Connect = ({ arrowDown }) => {
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
        id="connect-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Connect
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
          Contact
        </MenuItem>
        <MenuItem className="nav__link" onClick={handleClose}>
          Newsletter
        </MenuItem>
        <MenuItem className="nav__link" onClick={handleClose}>
          LinkedIn
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Connect;
