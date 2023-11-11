import gmailSVG from "../svg/gmail.svg";
import githubSVG from "../svg/github.svg";
import linkedinSVG from "../svg/linkedin.svg";


const Footer = () => {
  return (
    <footer className="text-center d-flex flex-column justify-content-center">
      <div className="footer-nav d-flex justify-content-around">
        <a href="_blank">HOME</a>
        <a href="_blank">ABOUT</a>
        <a href="_blank">EXPERTISE</a>
        <a href="_blank">PROJECTS</a>
        <a href="_blank">CONTACT</a>
      </div>
      <div className="socials">
        <img src={linkedinSVG} alt="LinkedIn Icon" />
        <img src={githubSVG} alt="Github Icon" />
        <img src={gmailSVG} alt="Gmail Icon" />
      </div>
      <div className="footer-c">Designed & Built by Daniel Cojocea</div>
    </footer>
  )
}

export default Footer
