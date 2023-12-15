import SectionHeading from "./SectionHeading";
import SliderComponent from "./SliderComponent";

const Projects = () => {
  
  return (
    <>
      <div className="section center d-flex flex-column justify-content-center">
        <div className="projects text-center" id="projects">
          {/* <div className="gradient__wrapper d-flex justify-content-around">
            <div className="gradient">
              <div className="gradient__inner"></div>
            </div>
          </div> */}
          <SectionHeading head="Projects" title="Some Things I've Built" />
          <SliderComponent />
        </div>
      </div>
    </>
  )
}

export default Projects
