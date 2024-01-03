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
        <div className="nav-btn" onClick={showNavBar}>
          <svg class="bars" viewBox="0 0 100 100" onclick="this.classList.toggle('active')">
            <path class="line top" d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"></path>
            <path class="line middle" d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"></path>
            <path class="line bottom" d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"></path>
          </svg>
        </div>
      </div>
    </header>
  )
}

export default Header
