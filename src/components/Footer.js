import gmailSVG from "../svg/gmail.svg";
import githubSVG from "../svg/github.svg";
import linkedinSVG from "../svg/linkedin.svg";
import { HashLink } from "react-router-hash-link";
import { scrollWidthOffset } from "./Functions";


const Footer = () => {
  
  return (
    <footer className="text-center d-flex flex-column justify-content-center">
      <hr/>
      <div className="footer-nav d-flex flex-wrap justify-content-center align-self-center">
        <HashLink to="/#">HOME</HashLink>
        <HashLink to="/#about" scroll={scrollWidthOffset}>ABOUT</HashLink>
        <HashLink to="/#expertise" scroll={scrollWidthOffset}>EXPERTISE</HashLink>
        <HashLink to="/#projects" scroll={scrollWidthOffset}>PROJECTS</HashLink>
        <HashLink to="/#contact" scroll={scrollWidthOffset}>CONTACT</HashLink>
      </div>
      <hr/>
      <div className="socials">
        <img src={linkedinSVG} alt="LinkedIn Icon" />
        <img src={githubSVG} alt="Github Icon" />
        <img src={gmailSVG} alt="Gmail Icon" />
      </div>
      <div className="footer-credentials d-flex align-self-center">Designed & Built by Daniel Cojocea</div>
    </footer>
  )
}

export default Footer
