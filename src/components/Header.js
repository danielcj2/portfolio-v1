import { IoSunny } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  var [scrolled, setScrolled] = useState(false);

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
        <div className="header-component d-flex align-items-end"><a href="/#about">about</a></div>
        <div className="header-component d-flex align-items-end"><a href="/#expertise">expertise</a></div>
        <div className="header-component d-flex align-items-end"><a href="/#projects">projects</a></div>
        <div className="header-component d-flex align-items-end"><a href="/#contact">contact</a></div>
        <div className="header-component d-flex align-items-end"><div className="theme-change-btn"><IoSunny /></div></div>
      </div>
    </header>
  )
}

export default Header
