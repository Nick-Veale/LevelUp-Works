import React, { useState, useContext } from "react";
import "./Nav.css";
import Logo from "../../img/starLogo.png";
import nzFlag from "../../img/nzFlag.png";
import maoriFlag from "../../img/maoriFlag.png";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { UserContext } from "../../userContext";
import NavModal from "./NavModal";
import { Link as ScrollLink } from "react-scroll";

function Nav() {
  const { user, setUser } = useContext(UserContext);

  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const navStyle = {
    color: "white",
    textDecoration: "none",
  };

  const handleMenuOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut = () => {
    setUser(null);
    setAnchorEl(null);
    setOpen(false);
  };

  const handleRightDivWhenLoggedIn = () => {
    if (!user) {
      return (
        <div className="navHomeContainer">
          <span className="spanstyle">
            <span className="spanStyle1" onClick={() => handleOpen()}>
              <AccountCircleIcon />
              REGISTER | LOGIN
            </span>
            <NavModal open={open} handleClose={handleClose} />
          </span>
        </div>
      );
    } else {
      if (user.isTeacher === false) {
        return (
          <span>
            <span
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              style={{ cursor: "pointer" }}
            >
              <img
                style={{ width: "25px", borderRadius: "50%" }}
                src={user.profilePicture}
                alt=""
              ></img>
              {user.username}
            </span>
            <Menu
              id="fade-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              style={{ color: "cornsilk", marginTop: "10px" }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                to="/profile"
              >
                <MenuItem onClick={handleMenuClose}>My Profile</MenuItem>
              </Link>
              <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                to="/"
              >
                <MenuItem onClick={handleLogOut}>Logout</MenuItem>
              </Link>
            </Menu>
          </span>
        );
      } else {
        return (
          <span>
            <span
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              className="profileSpan"
              style={{ cursor: "pointer" }}
            >
              <img
                style={{ width: "25px", borderRadius: "50%" }}
                src={user.profilePicture}
                alt=""
              ></img>
              {user.username}
            </span>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                to="/profile"
              >
                <MenuItem onClick={handleMenuClose}>My Profile</MenuItem>
              </Link>
              <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                to="/"
              >
                <MenuItem onClick={handleLogOut}>Logout</MenuItem>
              </Link>
            </Menu>
          </span>
        );
      }
    }
  };

  const handleCenterDivWhenLoggedIn = () => {
    if (!user) {
      return (
        <ul className="CenterList">
          <Link style={navStyle} to="/">
            <li>HOME</li>
          </Link>
          <ScrollLink activeClass="active" to="Skills" spy={true} smooth={true}>
            <li>FEATURES</li>
          </ScrollLink>
          <li>TEACHERS</li>
        </ul>
      );
    } else {
      if (user.isTeacher === true) {
        return (
          <ul className="CenterList">
            <Link style={navStyle} to="/profile">
              <li>PROFILE</li>
            </Link>
            <Link style={navStyle} to="/projects">
              <li>PROJECTS</li>
            </Link>
            <Link style={navStyle} to="/teachers">
              <li>TEACHER DASHBOARD</li>
            </Link>
          </ul>
        );
      } else {
        return (
          <ul className="CenterList">
            <Link style={navStyle} to="/projects">
              <li>PROJECTS</li>
            </Link>
            <Link style={navStyle} to="/profile">
              <li>PROFILE</li>
            </Link>
          </ul>
        );
      }
    }
  };

  const handleLeftDivWhenLoggedIn = () => {
    if (!user) {
      return (
        <Link to="/">
          <div className="leftDiv">
            <img className="logoImage" src={Logo} alt="" />
          </div>
        </Link>
      );
    } else {
      return (
        <div className="leftDiv">
          <img className="logoImage" src={Logo} alt="" />
        </div>
      );
    }
  };

  return (
    <div className="NavBar">
      {handleLeftDivWhenLoggedIn()}
      <div className="CenterDiv">{handleCenterDivWhenLoggedIn()}</div>
      <div className="RightDiv">
        <span className="langSpan">
          <small>LANG</small>
          <img className="smallFlag" src={nzFlag} alt="" />
          <img className="smallFlag" src={maoriFlag} alt="" />
        </span>
        {handleRightDivWhenLoggedIn()}
      </div>
    </div>
  );
}

export default Nav;
