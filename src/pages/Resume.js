import '../css/resume.css';
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { MdSimCardDownload } from "react-icons/md";


const Resume = () => {
  return (
    <main className="resume d-flex">
      <aside><a className="resume-pdf" href="resume pdf link"><MdSimCardDownload className="svg-dl"/>Grab a Copy</a></aside>
      <div>
        <section>
          <h1 className="name">Daniel Cojocea</h1>
          <h3>Junior Frontend Developer</h3>
          <ul className="contact-info">
            <li className="contact-item"><FaPhoneAlt />(437)-234-4060</li>
            <li className="contact-item"><IoIosMail />danielcojocea18@gmail.com</li>
            <li className="contact-item"><FaGithub />github.com/danielcj2</li>
          </ul>
        </section>
        <section>
          <h5>education</h5>
          <p>Bachelor of Science(Honours) in Computer Science</p>
          <a href="/" className="uni">Trent University, Peterborough, ON</a>
          <p>Sept 2018 - April 2022</p>
        </section>
        <section>
          <h5>competencies</h5>
          <ul className="skills">
            <li className="skill">React</li>
            <li className="skill">HTML</li>
            <li className="skill">CSS</li>
            <li className="skill">Javascript</li>
            <li className="skill">PHP</li>
            <li className="skill">SQL</li>
            <li className="skill">jQuery</li>
            <li className="skill">Bootstrap</li>
            <li className="skill">C#</li>
            <li className="skill">Java</li>
            <li className="skill">Figma</li>
          </ul>
        </section>
      </div>
      <article className="flex-fill">
        <section className="right-side">
          <h2 className="text-center">relevant experience</h2>
          <h4>projects</h4>
          <div className="project-container">
            <div className="project-heading">
              <span className="bold">Movie Ranker</span> - Personal Project
            </div>
            <a className="project-source" href="source link">github.com/danielcj2/movie-ranker-js</a>
            <p className="project-description"><span className="bold">Description:</span> Developed a movie ranker web applicatino that engages movie enthusiasts in an interactive movie showdown experience. The project revolves around a 1v1-style movie comparison, where users have the power to influence movie rankings through their choices.</p>
            <ul className="project-contributions">
              <li>Designed and implemented an algorithm that allows users to select a set of rounds.</li>
              <li>Employed PHP and SQL queries for one version of the application, facilitating efficient data updates and retrievals during the movie showdown process. Additionally, in the other version, utilized JavaScript and JSON for seamless data handling.</li>
              <li>Implemented CSS media queries to guarantee a consistent and immersive user experience across various devices.</li>
              <li>Deployed website on github.</li>
            </ul>
          </div>
          <div className="project-container">
            <div className="project-heading">
              <span className="bold">Software Engineering</span> - Uni Project
            </div>
            <a className="project-source" href="source link">Trent University, Peterborough, ON</a>
            <ul className="project-contributions">
              <li>Was part of a team of four that worked hand in hadn i nthe planning, design, development, and execution of the project presented by the client.</li>
              <li>Built the user interface from scratch to reflect the Trent University theme.</li>
              <li>Streamlined the process of connecting users to project entries on the web application</li>
              <li>Attended weekly meetings with the client to discuss the project scope.</li>
              <li>Attended weekly meetings with the team to report, delegate work and address existing or new found issues.</li>
            </ul>
          </div>
          <div className="project-container">
            <div className="project-heading">
              <span className="bold">React Guessing Game</span> - Personal Project
            </div>
            <a className="project-source" href="source link">github.com/danielcj2/vsidle-game</a>
            <p className="project-description"><span className="bold">Description:</span> Developed a dynamic and interactive web-based guessing game in React, drawing inspiration from the popular web game Wordle. The game offers multiple categories for players to choose from and provides them with a series of hints to guess the correct answer.</p>
            <ul className="project-contributions">
              <li>Leveraged the power of React to build a robust and responsive user interface ensuring smooth interactions and efficient data handling.</li>
              <li>Crafted customized styles to give the game a visually appealing and user-friendly appearance.</li>
              <li>Utilized Bootstrap for additional layout components and responsive design elements.</li>
              <li>Designed and created custom icons for the game, converting them into SVG format for improved scalability and visual quality.</li>
              <li>Integrated a timer mechanism that resets the game and presents new challenges every 12 hours, increasing replay value and excitement.</li>
            </ul>
          </div>
        </section>
      </article>
    </main>
  )
}

export default Resume
