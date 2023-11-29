import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import '../css/project.css';

const Project = () => {
  return (
    <>
      <Header />
      <main className="project">
        <div className="section__ project-details mx-auto d-flex flex-column justify-content-end">
          <div className="">
            <Link className="d-flex align-items-center"><FaArrowLeftLong />Back to projects</Link>
            <h3>Project</h3>
            <h1>Guessdle</h1>
            <p>Dynamic and interactive web-based guessing game in React, drawing inspiration from the popular web game Wordle. The game offers multiple categories for players to choose from and provides them with a series of hints to guess the correct answer.</p>
            <div className="tags d-flex">
              <div className="tag text-center">React</div>
              <div className="tag text-center">CSS</div>
              <div className="tag text-center">Bootstrap</div>
            </div>
            <Link className="repo-link"><FaGithub /></Link>
          </div>
        </div>
        <div className="section__ mx-auto"></div>
      </main>
      <Footer />
    </>
  )
}

export default Project
