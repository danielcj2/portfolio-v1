import Header from '../components/Header';
import Footer from '../components/Footer';
import NotFound from '../components/NotFound';
import { HashLink } from "react-router-hash-link";
import { useParams } from 'react-router-dom';
import { scrollWidthOffset } from "../components/Functions";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import TransitionScreen from '../components/TransitionScreen';
import RevealFramer from '../components/RevealFramer';
import { guessdleImgs, portfolioImgs, movieRankerImgs} from '../project-imgs.js';

import '../css/project.css';

const Project = () => {
  var projectList=[
    {
      id: 1,
      name: "Guessdle",
      description: "Dynamic and interactive web-based guessing game in React, drawing inspiration from the popular web game Wordle. The game offers multiple categories for players to choose from and provides them with a series of hints to guess the correct answer.",
      path: 'guessdle',
      tags: ["React", "CSS", "Boostrap"],
      background: "a",
      img_: guessdleImgs,
      source: "https://github.com/danielcj2/vsidle-game",
    },
    {
      id: 2,
      name: "Movie Ranker",
      description: "Movie ranker web application that engages movie enthusiasts in an interactive movie showdown experience. The project revolves around a 1v1-style movie comparison, where users have the power to influence movie rankings through their choices.",
      path: 'movie_ranker',
      tags: ["Javascript", "CSS", "jQuery"],
      background: "a",
      img_: movieRankerImgs,
      source: "https://github.com/danielcj2/movie-ranker-js"
    },
    {
      id: 3,
      name: "Portfolio",
      description: "A dynamic showcase of my skills and achievements. This project serves as a digital canvas, highlighting my expertise, passion, and diverse range of projects.",
      path: 'portfolio',
      tags: ["React", "CSS", "Bootstrap"],
      background: "a",
      img_: portfolioImgs,
      source: "https://github.com/danielcj2/portfolio-v1"
    }
  ]

  const { path } = useParams();
  var projectFound = projectList.find(p => p.path === path);
  
  return (
    <>
      <TransitionScreen />
      {(typeof(projectFound) === 'undefined') ? <NotFound /> : <><Header /><main className="project">
        <div className="section__ project-details mx-auto d-flex flex-column justify-content-end">
          <div>
            <HashLink to="/#projects" scroll={scrollWidthOffset} className="interactable d-flex align-items-center"><FaArrowLeftLong />Back to projects</HashLink>
            <RevealFramer><h3>Project</h3></RevealFramer>
            <RevealFramer><h1>{projectFound.name}</h1></RevealFramer>
            <RevealFramer><p>{projectFound.description}</p></RevealFramer>
            <RevealFramer><div className="tags d-flex">
            {projectFound.tags.map((tag, id) => (<div className="tag text-center" key={id}>{tag}</div>))}
            </div></RevealFramer>
            <RevealFramer><a className="repo-link interactable" href={projectFound.source}><FaGithub /></a></RevealFramer>
          </div>
        </div>
        <div className="section__ mx-auto">
          {projectFound.img_.map((img, id) => (<div className="project__img" key={id}><img src={img.image} alt=""></img></div>))}
        </div>
      </main><Footer /></>}
    </>
  )
}

export default Project
