import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../assets/image/lsam.png";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faUserCircle, faBell, faGear, faClose, faBars } from "@fortawesome/free-solid-svg-icons";

const NavBars = () => {
    const [showProfileOptions, setShowProfileOptions] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const [menuIcon, setMenuIcon] = useState(faBars)
    const [menuIcon2, setMenuIcon2] = useState(faBars)

    const ProfileLinks = () => {
      return (
        <div className="menu-list">
          <ul className="menu-ul">
            <li><Link to='settings'>
              Settings
              </Link></li>
            <li><Link to='Privacy'>
              Privacy
              </Link></li>
            <li><Link to='profile'>
              Profile
              </Link></li>
            <li><Link to='offers'>
              Offers
              </Link></li>
          </ul>
        </div>
      )
    }
    const ProfileMenu = () => {
      return (
        <>
        <nav className="profilemenu">
          <NavLink exact="true" to="/" activeclassname="active" className='home'>
            Home
          </NavLink>
          <NavLink exact="true" to="store" activeclassname="active" className='store'>
            Store
          </NavLink>
          <NavLink exact="true" to="contact" activeclassname="active" className='contact'>
            Contact
          </NavLink>
          <NavLink exact="true" to="serices" activeclassname="active" className='services'>
            Services
          </NavLink>
          < div className="links">
        <Link to="/">
         <FontAwesomeIcon  icon={faCartPlus} color="#fff" className="others1" />
        </Link>
        <Link to="/">
        <FontAwesomeIcon  icon={faBell} color="#fff" className="others1" />
        </Link> 
        <Link to="/">
        <FontAwesomeIcon  icon={faGear} color="#fff" className="others1 spa" />
        </Link> 
        <Link to="/">
        <FontAwesomeIcon  icon={faUserCircle} color="#fff" className="others2"  />
        </Link>
        </div>
        </nav>
        
        </>
      )
    }
    const DesktopMenuHandler = () => {
      setShowProfileOptions(!showProfileOptions)
      // setMenuIcon( faClose )
      if (menuIcon === faClose) {
        setMenuIcon(faBars)
      } 
      else if (menuIcon === faBars){
        setMenuIcon(faClose)
      }
    }
    const MobileMenuHandler = () => {
      setShowMenu(!showMenu)
      if (menuIcon2 === faClose) {
        setMenuIcon2(faBars)
      } 
      else if (menuIcon2 === faBars){
        setMenuIcon2(faClose)
      }
    }
    

  return (
    <div className="main-navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={Logo} alt="Website Logo" />
        </Link>
        <h2>BXList</h2>
      </div>

      <div className="navbar-menu">
      <nav>
          <NavLink exact="true" to="/" activeclassname="active" className='home'>
            Home
          </NavLink>
          <NavLink exact="true" to="store"activeclassname="active" className='store'>
            Store
          </NavLink>
          <NavLink exact="true" to="contact" activeclassname="active" className='contact'>
            Contact
          </NavLink>
          <NavLink exact="true" to="services" activeclassname="active" className='services'>
            Services
          </NavLink>
        </nav>
      </div>

      <div className="navbar-others">
        <Link to="/">
         <FontAwesomeIcon  icon={faCartPlus} color="#fff" className="others1" />
        </Link>
        <Link to="/">
        <FontAwesomeIcon  icon={faBell} color="#fff" className="others1" />
        </Link> 
        <Link to="/">
        <FontAwesomeIcon  icon={faGear} color="#fff" className="others1 spa" />
        </Link> 
        <Link to="/">
        <FontAwesomeIcon  icon={faUserCircle} color="#fff" className="others2"  />
        </Link>
        <button type="button" onClick={DesktopMenuHandler}>
          <FontAwesomeIcon  icon={menuIcon} color="#fff" className="others3" />
        </button>
        
      </div>

      <div className="mobilemenu">
        <button type="button" onClick={MobileMenuHandler}>
          <FontAwesomeIcon icon={menuIcon2} color="fff" />
        </button>
      </div>
      {showProfileOptions && <ProfileLinks />}
      {showMenu && <ProfileMenu />}
    </div>
  );
};
export default NavBars;
