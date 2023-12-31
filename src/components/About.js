import SectionHeading from "./SectionHeading";
import { HashLink } from "react-router-hash-link";
import { scrollWidthOffset } from "./Functions";

const About = () => {
  return (
    <div className="section d-flex flex-column justify-content-center">
      <div className="about text-left" id="about">
        <SectionHeading head="About" title="Who Am I?"/>
        <p>Hello! My name is Daniel and I enjoy building clean and scalable frontend applications with exceptional user experiences. I have recently graduated from <a className="underline-slide" href="https://www.trentu.ca/" target="_blank" rel="noopener noreferrer">Trent University</a> with a degree in <a className="underline-slide" href="https://www.trentu.ca/durham/academics/degrees-and-programs/computer-science-bsc" target="_blank" rel="noopener noreferrer">Computer Science</a> in the Honours Program.</p>
        {/* <p>Problem solver, critical thinker, passionate worker, loyal at heart, you name it!</p> */}
        <p className="d-flex align-items-center flex-wrap">Feel free to hit me up! I tend to respond fairly quick. <HashLink className="contact-btn curtain text-center" to="/#contact" scroll={scrollWidthOffset}>Contact</HashLink></p>
        <div className="flippable-container">
          <div className="flippable-card">
            <div className="face face-front d-flex flex-column justify-content-center">I'm typically always on the computer, whether it be hacking away at problems of my own doing, or nitpicking padding measurements.</div>
            <div className="face face-top d-flex flex-column justify-content-center">Self proclaimed gaming enthusiast and avid show watcher. I go outside sometimes.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
