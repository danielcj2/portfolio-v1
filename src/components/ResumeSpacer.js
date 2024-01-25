import { HashLink } from "react-router-hash-link"

const ResumeSpacer = () => {
  return (
    <div className="break d-flex justify-content-center align-items-center" >
      <div className="resume-bg-img"></div>
      <dic className="resume-break">View my full <a className="resume-link" href="/resume" target="_blank">resume</a></dic> 
    </div>
  )
}

export default ResumeSpacer
