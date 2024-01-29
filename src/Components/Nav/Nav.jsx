import React, { useEffect, useState } from 'react'
import Netflixlogo from "../../assets/images/NetflixLogo.png"
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./Nav.css"
const Nav = () => {


  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    // return () => {
    //   window.removeEventListener("scroll")
    // }
    // {`nav ${show && "nav__black"}`}
  }
    , []) 
  
  return (
    <div className="Wrapper__outer">
      <div className="wrapper__inner">
        <div className="nav__left">
          <div className="logo__container">
            <img className="logo" src={Netflixlogo} alt="Netflic Logo" />
          </div>
          <div>
            <ul>
              <li>Home</li>
              <li>Tv Shows</li>
              <li>Movies</li>
              <li>New & Popular</li>
              <li>My List</li>
              <li>Browse by Languages</li>
            </ul>
          </div>
        </div>
        <div className="nav__right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>Kids</li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
