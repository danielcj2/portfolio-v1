import RevealFramer from "./RevealFramer";
import { HashLink } from "react-router-hash-link";
import { ReactComponent as SpaceBackground} from "../assets/svg/blob-background.svg";
import { ReactComponent as SpaceBackgroundLight} from "../assets/svg/blob-background-light.svg";
import { useTheme } from './ThemeContext';

const Introduction = () => {
  const darkTheme = useTheme();

  return (
    <div className="section d-flex flex-column justify-content-center">
      <div className="intro">
        <RevealFramer><h3>Hi, my name is</h3></RevealFramer>
        <RevealFramer><h1>Daniel Cojocea.</h1></RevealFramer>
        <RevealFramer><h2>I do stuff on the internet.</h2></RevealFramer>
        <RevealFramer>
          <div className="d-flex align-items-center divider">
              <h3>I'm a Web Developer.</h3>
              <HashLink className="resume-btn curtain text-center interactable" to="/resume" alt="resume">Resume</HashLink>
          </div>
        </RevealFramer>
      </div>
      <div className="space-background">{ darkTheme ? <SpaceBackground/> : <SpaceBackgroundLight />}</div>
    </div>
  )
}

export default Introduction