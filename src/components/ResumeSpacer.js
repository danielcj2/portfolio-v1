import { ReactComponent as DividerSVG} from "../assets/svg/divider.svg";
import { ReactComponent as DividerSVGLight} from "../assets/svg/divider-light.svg";
import { useTheme } from './ThemeContext';


const ResumeSpacer = () => {
  const darkTheme = useTheme();
  
  return (
    <>
      <hr/>
      <div className="break d-flex justify-content-center align-items-center" >
        { darkTheme ? <DividerSVG className="resume-bg-img" /> : <DividerSVGLight className="resume-bg-img" />}
        <div className="resume-break">View my full <a className="resume-link underline-slide interactable" href="/resume" target="_blank">résumé</a></div> 
      </div>
      <hr/>
    </>
  )
}

export default ResumeSpacer
