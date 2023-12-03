import SectionHeading from "./SectionHeading";
import { ImCloudDownload } from "react-icons/im";
import SliderComponent from "./SliderComponent";

const Projects = () => {
  
  return (
    <>
      <button className="resume-break"><ImCloudDownload className="react-icon"/></button>
      <div className="section center d-flex flex-column justify-content-center">
        <div className="projects text-center">
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
