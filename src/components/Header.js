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
        <div className="header-component not"><HashLink to="/#"><div className="star text-center d-flex flex-column justify-content-center">d</div></HashLink></div>
        <nav className="d-flex align-items-center" ref={navRef}>
          <div className="header-component"><HashLink to="/#about" scroll={scrollWidthOffset} onClick={showNavBar}>about</HashLink></div>
          <div className="header-component"><HashLink to="/#expertise" scroll={scrollWidthOffset} onClick={showNavBar}>expertise</HashLink></div>
          <div className="header-component"><HashLink to="/#projects" scroll={scrollWidthOffset} onClick={showNavBar}>projects</HashLink></div>
          <div className="header-component"><HashLink to="/#contact" scroll={scrollWidthOffset} onClick={showNavBar}>contact</HashLink></div>
          <div className="header-component"><div className={ darkTheme ? "theme-change-btn" : "theme-change-btn moon"} onClick={toggleTheme}>{darkTheme ? <IoSunny /> : <IoMoon />}</div></div>
        </nav>
        <input type="checkbox" id="nav-btn" class="nav-btn hidden" />
        <label for="nav-btn" onClick={showNavBar}>
            <div class="hamburger">
                <span class="bar bar1"></span>
                <span class="bar bar2"></span>
                <span class="bar bar3"></span>
                <span class="bar bar4"></span>
            </div>
        </label>
      </div>
    </header>
  )
}

export default Header
