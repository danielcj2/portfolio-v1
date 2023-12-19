import Header from '../components/Header';
import Footer from '../components/Footer';
import NotFound from '../components/NotFound';
import { HashLink } from "react-router-hash-link";
import { useParams } from 'react-router-dom';
import { scrollWidthOffset } from "../components/Functions";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import TransitionScreen from '../components/TransitionScreen';
import { useState, useEffect } from 'react';

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
      img_: ["1", "2", "3"],
      source: "https://github.com/danielcj2/vsidle-game",
    },
    {
      id: 2,
      name: "Movie Ranker",
      description: "Movie ranker web application that engages movie enthusiasts in an interactive movie showdown experience. The project revolves around a 1v1-style movie comparison, where users have the power to influence movie rankings through their choices.",
      path: 'movie_ranker',
      tags: ["Javascript", "CSS", "jQuery"],
      background: "a",
      img_: ["1", "2", "3"],
      source: "https://github.com/danielcj2/movie-ranker-js"
    },
    {
      id: 3,
      name: "Portfolio",
      description: "",
      path: 'portfolio',
      tags: ["React", "CSS", "Bootstrap"],
      background: "a",
      img_: ["1", "2", "3"],
      source: "https://github.com/danielcj2/portfolio-v1"
    }
  ]

  const { path } = useParams();
  var projectFound = projectList.find(p => p.path === path);
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, []);

  return (
    <>
      {loading && <TransitionScreen />}
      {(typeof(projectFound) === 'undefined') ? <NotFound /> : <><Header /><main className="project">
        <div className="section__ project-details mx-auto d-flex flex-column justify-content-end">
          <div>
            <HashLink to="/#projects" scroll={scrollWidthOffset} className="d-flex align-items-center"><FaArrowLeftLong />Back to projects</HashLink>
            <h3>Project</h3>
            <h1>{projectFound.name}</h1>
            <p>{projectFound.description}</p>
            <div className="tags d-flex">
            {projectFound.tags.map((tag, id) => (<div className="tag text-center" key={id}>{tag}</div>))}
            </div>
            <a className="repo-link" href={projectFound.source}><FaGithub /></a>
          </div>
        </div>
        <div className="section__ mx-auto"></div>
      </main><Footer /></>}
    </>
  )
}

export default Project
