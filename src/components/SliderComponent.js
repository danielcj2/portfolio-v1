import Slider from "react-slick";
import { HashLink } from "react-router-hash-link";
import { useState, useRef } from "react";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import guessdleImg from "../img/guessdle.jpg";
import movie_rankerImg from "../img/movie-ranker.jpg";
import portfolioImg from "../img/portfolio.jpg";
import { motion } from "framer-motion";
import portfolioHover from "../svg/portfolio-title.svg";
import movieHover from "../svg/movie-ranker-title.svg";
import guessdleHover from "../svg/guessdle-title.svg";

const SliderComponent = () => {
  var settings = {
    dots: false,
    className: "center",
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          centerMode: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false
        }
      }
    ]
  };
  
  const projectList = [
    {
      id: 1,
      name: 'guessdle',
      description: '',
      path: '/projects/guessdle#',
      background: guessdleImg,
      hover: guessdleHover,
    }, 
    {
      id: 2,
      name: 'movie-ranker',
      description: '',
      path: '/projects/movie_ranker#',
      background: movie_rankerImg,
      hover: movieHover,
    }, 
    {
      id: 3,
      name: 'portfolio',
      description: '',
      path: '/projects/portfolio#',
      background: portfolioImg,
      hover: portfolioHover,
    }
  ]

  const arrowRef= useRef(null);
  const [isHover, setHover]= useState("");

  return (
    <div className="slider-container mx-auto">
      <Slider ref={arrowRef} {...settings}>
        {projectList.map((project) => (<motion.div className={"project-wrapper " + project.name} key={project.id} onHoverStart={() => setHover(project.name)} onHoverEnd={() => setHover("")}><HashLink to={project.path}><img className="prj-cover" src={project.background} alt="Project cover" />
        <motion.img
          className="prj-hover"
          src={project.hover}
          style={{position:"absolute", objectFit:"contain"}}
          initial ={{ y: 0, scale: 1/1.15 }}
          animate={isHover === project.name ? { y: "-100%", scale: 1/1.15} : {opacity: 1} }
          transition={{type:"spring", duration: 0.75}}>    
        </motion.img></HashLink></motion.div>))}
        {projectList.map((project) => (<motion.div className={"project-wrapper " + project.name} key={project.id} onHoverStart={() => setHover(project.name)} onHoverEnd={() => setHover("")}><HashLink to={project.path}><img className="prj-cover" src={project.background} alt="Project cover" />
        <motion.img
          className="prj-hover"
          src={project.hover}
          style={{position:"absolute", objectFit:"contain"}}
          initial ={{ y: 0, scale: 1/1.15 }}
          animate={isHover === project.name ? { y: "-100%", scale: 1/1.15} : {opacity: 1} }
          transition={{type:"spring", duration: 0.75}}>    
        </motion.img></HashLink></motion.div>))}
      </Slider>
      <button className="btn-left interactable" onClick={() =>arrowRef.current.slickPrev()}><MdOutlineKeyboardArrowLeft/></button>
      <button className="btn-right interactable" onClick={() =>arrowRef.current.slickNext()}><MdOutlineKeyboardArrowRight/></button>
    </div>
  )
}

export default SliderComponent
