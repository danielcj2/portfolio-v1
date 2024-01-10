import { IoSunny, IoMoon } from "react-icons/io5";
import { useState, useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { scrollWidthOffset } from "./Functions";
import { useTheme, useThemeUpdate } from "./ThemeContext";


const Header = () => {
  var [scrolled, setScrolled] = useState(false);
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive-nav")
  }

  window.onscroll = function() {
    if(window.scrollY<=50){
      setScrolled(false);
    } else{
      setScrolled(true);
    }
  }
  
  return (
    <header className={scrolled ? "fixed scrolled" : "fixed"}>
      <div className="header-wrapper d-flex flex-nowrap justify-content-end align-items-center">
        <div className="header-component interactable not"><HashLink to="/#"><div className="star text-center d-flex flex-column justify-content-center">d</div></HashLink></div>
        <nav className="d-flex align-items-center" ref={navRef}>
          <div className="header-component interactable"><HashLink to="/#about" scroll={scrollWidthOffset} onClick={showNavBar}>about</HashLink></div>
          <div className="header-component interactable"><HashLink to="/#expertise" scroll={scrollWidthOffset} onClick={showNavBar}>expertise</HashLink></div>
          <div className="header-component interactable"><HashLink to="/#projects" scroll={scrollWidthOffset} onClick={showNavBar}>projects</HashLink></div>
          <div className="header-component interactable"><HashLink to="/#contact" scroll={scrollWidthOffset} onClick={showNavBar}>contact</HashLink></div>
          <div className="header-component interactable"><div className={ darkTheme ? "theme-change-btn" : "theme-change-btn moon"} onClick={toggleTheme}>{darkTheme ? <IoSunny /> : <IoMoon />}</div></div>
        </nav>
        <input type="checkbox" id="nav-btn" className="nav-btn hidden" />
        <label htmlFor="nav-btn" onClick={showNavBar}>
            <div className="hamburger">
                <span className="bar bar1"></span>
                <span className="bar bar2"></span>
                <span className="bar bar3"></span>
                <span className="bar bar4"></span>
            </div>
        </label>
      </div>
    </header>
  )
}

export default Header
