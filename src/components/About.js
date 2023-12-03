import SectionHeading from "./SectionHeading";

const About = () => {
  return (
    <div className="section d-flex flex-column justify-content-center">
      <div className="about text-center">
        <SectionHeading head="About" title="Who Am I?"/>
        <p>Hello! My name is Daniel and I enjoy building frontend applications. I have recently graduated from <a href="_blank">Trent University</a> with a degree in Computer Science.</p>
        <p>I'm generally always on the computer, whether it be hacking away at problems or nitpicking margin and padding measurements.</p>
        <p>Feel free to hit me up! I tend to respond fairly quick.</p>
        <a href="_blank" className="contact-btn text-center">Contact</a>
        <div className="highlighted-text">Self proclaimed gaming enthusiast and avid show watcher.</div>
      </div>
    </div>
  )
}

export default About
