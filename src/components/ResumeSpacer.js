import { ReactComponent as DividerSVG} from "../svg/divider.svg";

const ResumeSpacer = () => {
  return (
    <>
      <hr/>
      <div className="break d-flex justify-content-center align-items-center" >
        <DividerSVG className="resume-bg-img" />
        <div className="resume-break">View my full <a className="resume-link underline-slide interactable" href="/resume" target="_blank">résumé</a></div> 
      </div>
      <hr/>
    </>
  )
}

export default ResumeSpacer
