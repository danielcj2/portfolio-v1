import { FaGithub, FaLinkedin,  } from "react-icons/fa";
import { FiAtSign } from "react-icons/fi";

const Footer = () => {
  
  return (
    <footer className="text-center d-flex flex-column justify-content-center">
      <div className="socials">
        <a className="interactable" href="https://www.linkedin.com/in/danielcj2/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a className="interactable" href="https://github.com/danielcj2" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a className="interactable" href="mailto:danielcojocea18@gmail.com"><FiAtSign /></a>
      </div>
      <div className="footer-credentials d-flex align-self-center">Designed & Built by Daniel Cojocea</div>
    </footer>
  )
}

export default Footer
