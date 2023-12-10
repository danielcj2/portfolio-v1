import SectionHeading from "./SectionHeading";
import { HashLink } from "react-router-hash-link";
import { scrollWidthOffset } from "./Functions";

const About = () => {
  return (
    <div className="section d-flex flex-column justify-content-center">
      <div className="about text-center" id="about">
        <SectionHeading head="About" title="Who Am I?"/>
        <p>Hello! My name is Daniel and I enjoy building clean and scalable frontend applications with exceptional user experiences. I have recently graduated from <a className="underline-slide" href="https://www.trentu.ca/" target="_blank" rel="noopener noreferrer">Trent University</a> with a degree in <a className="underline-slide" href="https://www.trentu.ca/durham/academics/degrees-and-programs/computer-science-bsc" target="_blank" rel="noopener noreferrer">Computer Science</a> in the Honours Program.</p>
        <p>Problem solver, critical thinker, passionate worker, loyal at heart, you name it!</p>
        <p>Feel free to hit me up! I tend to respond fairly quick.</p>
        <HashLink className="contact-btn curtain text-center" to="/#contact" scroll={scrollWidthOffset}>Contact</HashLink>
        <div className="flippable-text" data-back="Self proclaimed gaming enthusiast and avid show watcher." data-front="I'm typically always on the computer, whether it be hacking away at problems of my own doing, or nitpicking padding measurements."></div>
      </div>
    </div>
  )
}

export default About
