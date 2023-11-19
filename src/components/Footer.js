import gmailSVG from "../svg/gmail.svg";
import githubSVG from "../svg/github.svg";
import linkedinSVG from "../svg/linkedin.svg";


const Footer = () => {
  return (
    <footer className="text-center d-flex flex-column justify-content-center">
      <hr/>
      <div className="footer-nav d-flex align-self-center justify-content-around">
        <a href="_blank">HOME</a>
        <a href="_blank">ABOUT</a>
        <a href="_blank">EXPERTISE</a>
        <a href="_blank">PROJECTS</a>
        <a href="_blank">CONTACT</a>
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
