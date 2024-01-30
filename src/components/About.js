import SectionHeading from "./SectionHeading";
import { HashLink } from "react-router-hash-link";
import { scrollWidthOffset } from "./Functions";
import RevealFramer from "./RevealFramer";
import { ReactComponent as BlobCurved } from "../svg/blob-curved.svg";

const About = () => {
  return (
    <>
      <div><BlobCurved className="blob-curved"/></div>
      <div className="section d-flex flex-column justify-content-center">
        <div className="about text-left" id="about">
          <SectionHeading head="About" title="Who Am I?"/>
          <RevealFramer><p>Hello! My name is Daniel and I enjoy building clean and scalable frontend applications with exceptional user experiences. I have recently graduated from <a className="underline-slide interactable" href="https://www.trentu.ca/" target="_blank" rel="noopener noreferrer">Trent University</a> with a degree in <a className="underline-slide interactable" href="https://www.trentu.ca/durham/academics/degrees-and-programs/computer-science-bsc" target="_blank" rel="noopener noreferrer">Computer Science</a> in the Honours Program.</p></RevealFramer>
          {/* <p>Problem solver, critical thinker, passionate worker, loyal at heart, you name it!</p> */}
          <RevealFramer><p className="d-flex align-items-center flex-wrap">Feel free to hit me up! I tend to respond fairly quick. <HashLink className="contact-btn curtain text-center interactable" to="/#contact" scroll={scrollWidthOffset}>Contact</HashLink></p></RevealFramer>
          <RevealFramer>
            <div className="flippable-container">
              <div className="flippable-card">
                <div className="face face-front d-flex flex-column justify-content-center">I'm typically always on the computer, whether it be hacking away at problems of my own doing, or nitpicking padding measurements.</div>
                <div className="face face-top d-flex flex-column justify-content-center">Self proclaimed gaming enthusiast and avid show watcher. I go outside sometimes.</div>
              </div>
            </div>
          </RevealFramer>
        </div>
      </div>
      <hr />
    </>
  )
}

export default About
