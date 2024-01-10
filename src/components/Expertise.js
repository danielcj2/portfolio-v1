import SectionHeading from "./SectionHeading";

import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { BsDatabaseFill } from "react-icons/bs";
import { SiJquery, SiCsharp, SiPhp } from "react-icons/si";
import { BiLogoBootstrap } from "react-icons/bi";

import Icon from "./Icon";

const Expertise = () => {
  
  const techItems=[
    {
      name: 'JavaScript',
      icon: <IoLogoJavascript />,
      styleTrue: '#f0db4f'
    },
    {
      name: 'HTML5',
      icon: <IoLogoHtml5 />,
      styleTrue: '#e34c26'
    },
    {
      name: 'CSS3',
      icon: <IoLogoCss3 />,
      styleTrue: '#264de4'
    },
    {
      name: 'PHP',
      icon: <SiPhp />,
      styleTrue: '#787CB5'
    },
    {
      name: 'SQL',
      icon: <BsDatabaseFill />,
      styleTrue: '#F29111'
    },
    {
      name: 'React',
      icon: <FaReact />,
      styleTrue: '#61dafb'
    },
    {
      name: 'Bootstrap',
      icon: <BiLogoBootstrap />,
      styleTrue: '#563d7c'
    },
    {
      name: 'jQuery',
      icon: <SiJquery />,
      styleTrue: '#0769ad'
    },
    {
      //"#1ABCFE"
      //"#0ACF83"
      //"#FF7262"
      //"#F24E1E"
      //"#A258FF"
      name: 'Figma',
      icon: <svg className="figma" width="35" height="50" viewBox="0 0 35 50" fill="currentcolor" xmlns="http://www.w3.org/2000/svg" >
        <path d="M17.5 25.0001C17.5 20.3965 21.4192 16.668 26.25 16.668C31.0846 16.668 35 20.393 35 25.0001C35 29.6037 31.0846 33.3323 26.25 33.3323C21.4231 33.3323 17.5 29.6073 17.5 25.0001Z"/>
        <path d="M0 41.6677C0 37.0642 3.91923 33.332 8.75 33.332H17.5V41.6677C17.5 46.2677 13.5808 49.9999 8.75 49.9999C3.91923 49.9999 0 46.2677 0 41.6677Z"/>
        <path d="M17.5 0V16.6679H26.25C31.0846 16.6679 35 12.9357 35 8.33214C35 3.73214 31.0846 0 26.25 0H17.5Z"/>
        <path d="M0 8.33214C0 12.9357 3.91923 16.6679 8.75 16.6679H17.5V0H8.75C3.91923 0 0 3.73214 0 8.33214Z"/>
        <path d="M0 25.0001C0 29.6037 3.91923 33.3323 8.75 33.3323H17.5V16.668H8.75C3.91923 16.668 0 20.393 0 25.0001Z"/>
      </svg>,
    },
    {
      name: 'C#',
      icon: <SiCsharp />,
      styleTrue: '#9a4993'
    }
  ]
  
  return (
    <div className="section d-flex flex-column justify-content-center">
      <div className="expertise text-left" id="expertise">
        <SectionHeading head="Expertise" title="Skills & Competencies" />
        <p>I've been doing web development for a little while now, and I'm continuously eager to learn more in this ever growing fast paced industry.</p>
        <div className="skills-container">
          <p>SOME TECHNOLOGIES I'VE WORKED WITH:</p>
          <div className="skills d-flex flex-wrap ">
            {techItems.map((item, index) => (<div className="skill" key={index}><Icon svgPath={item.icon} styleTrue={item.styleTrue} iconName={item.name}/></div>))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Expertise
