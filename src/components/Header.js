import darkThemeSVG from "../svg/dark-theme.svg"

const Header = () => {
  return (
    <header className="text-end d-flex flex-nowrap justify-content-between align-items-center">
      <div className="header-component d-flex flex-column"><span>01</span><a href="_blank">about</a></div>
      <div className="header-component d-flex flex-column"><span>02</span><a href="_blank">expertise</a></div>
      <div className="header-component d-flex flex-column"><span>03</span><a href="_blank">projects</a></div>
      <div className="header-component d-flex flex-column"><span>04</span><a href="_blank">contact</a></div>
      <div className="header-component d-flex flex-column"><div className="theme-change-btn"><img src={darkThemeSVG} alt="dark theme button icon" /></div></div>
    </header>
  )
}

export default Header
