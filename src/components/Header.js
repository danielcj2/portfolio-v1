import { IoSunny } from "react-icons/io5";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { scrollWidthOffset } from "./Functions";
import { useThemeUpdate } from "./ThemeContext";


const Header = () => {
  var [scrolled, setScrolled] = useState(false);
  const toggleTheme = useThemeUpdate();

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
        <div className="header-component"><HashLink to="/#"><div className="star text-center d-flex flex-column justify-content-center">d</div></HashLink></div>
        <div className="header-component"><HashLink to="/#about" scroll={scrollWidthOffset}>about</HashLink></div>
        <div className="header-component"><HashLink to="/#expertise" scroll={scrollWidthOffset}>expertise</HashLink></div>
        <div className="header-component"><HashLink to="/#projects" scroll={scrollWidthOffset}>projects</HashLink></div>
        <div className="header-component"><HashLink to="/#contact" scroll={scrollWidthOffset}>contact</HashLink></div>
        <div className="header-component"><div className="theme-change-btn" onClick={toggleTheme}><IoSunny /></div></div>
      </div>
    </header>
  )
}

export default Header
