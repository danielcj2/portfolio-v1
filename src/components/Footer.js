import { HashLink } from "react-router-hash-link";
import { scrollWidthOffset } from "./Functions";
import { FaGithub, FaLinkedin,  } from "react-icons/fa";
import { FiAtSign } from "react-icons/fi";

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
        <a href="https://www.linkedin.com/in/danielcj2/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/danielcj2" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="mailto:danielcojocea18@gmail.com"><FiAtSign /></a>
      </div>
      <div className="footer-credentials d-flex align-self-center">Designed & Built by Daniel Cojocea</div>
    </footer>
  )
}

export default Footer
