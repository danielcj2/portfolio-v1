import RevealFramer from "./RevealFramer";
import { ReactComponent as SpaceBackground} from "../svg/blob-background.svg";

const Introduction = () => {
  var stars = document.querySelectorAll("galaxy-star");
  for (var i = 0; i<stars.length; i++){
    stars[i].style.animationDelay = 1 + i/10;
    console.log(stars[i].style.animationDelay);
  }

  return (
    <div className="section d-flex flex-column justify-content-center">
      <div className="intro">
        <RevealFramer><h3>Hi, my name is</h3></RevealFramer>
        <RevealFramer><h1>Daniel Cojocea.</h1></RevealFramer>
        <RevealFramer><h2>I do stuff on the internet.</h2></RevealFramer>
        <RevealFramer>
          <div className="d-flex align-items-center divider">
              <h3>I'm a Web Developer.</h3>
              <a className="resume-btn curtain text-center interactable" href="/resume" target="_blank" alt="resume">Resume</a>
          </div>
        </RevealFramer>
      </div>
      <div className="space-background"><SpaceBackground/></div>
    </div>
  )
}

export default Introduction