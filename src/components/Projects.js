import SectionHeading from "./SectionHeading";
import SliderComponent from "./SliderComponent";
import RevealFramer from "./RevealFramer";

const Projects = () => {
  
  return (
    <>
      <div className="section center d-flex flex-column justify-content-center align-items-center">
        <div className="projects" id="projects">
          {/* <div className="gradient__wrapper d-flex justify-content-around">
            <div className="gradient">
              <div className="gradient__inner"></div>
            </div>
          </div> */}
          <SectionHeading head="Projects" title="Some Things I've Built" />
          <RevealFramer><p>Here's where the fun stuff happens - websites, coding adventures, and everything in between. No techy talk, just cool things I've enjoyed putting together.</p></RevealFramer>
          <SliderComponent />
        </div>
      </div>
    </>
  )
}

export default Projects
