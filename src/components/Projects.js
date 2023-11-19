import SectionHeading from "./SectionHeading";
import { ImCloudDownload } from "react-icons/im";

const Projects = () => {
  return (
    <>
      <button className="resume-break"><ImCloudDownload className="react-icon"/></button>
      <div>
        <div className="section center d-flex justify-content-around align-items-center">
          <div className="projects text-center">
              <SectionHeading head="Projects" title="Some Things I've Built" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
