import { IoSunny } from "react-icons/io5";

const Header = () => {
  return (
    <header className="text-end d-flex flex-nowrap justify-content-end align-items-center">
      <div className="header-component d-flex align-items-end"><a href="/#about">about</a></div>
      <div className="header-component d-flex align-items-end"><a href="/#expertise">expertise</a></div>
      <div className="header-component d-flex align-items-end"><a href="/#projects">projects</a></div>
      <div className="header-component d-flex align-items-end"><a href="/#contact">contact</a></div>
      <div className="header-component d-flex align-items-end"><div className="theme-change-btn"><IoSunny />
</div></div>
    </header>
  )
}

export default Header
