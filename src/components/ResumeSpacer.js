import { ReactComponent as SpacerSVG } from "../svg/layered-waves-haikei.svg"
import { HashLink } from "react-router-hash-link"

const ResumeSpacer = () => {
  return (
    <div className="break text-center" >
      <SpacerSVG className="spacer"/>
      <div><HashLink className="resume-break d-inline-block" to="/resume#">View my resume</HashLink></div>
      <SpacerSVG className="spacer spacer-bottom"/>
    </div>
  )
}

export default ResumeSpacer
