import Slider from "react-slick";
import { HashLink } from "react-router-hash-link";
import { useRef } from "react";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import guessdleImg from "../img/guessdle.jpg";
import movie_rankerImg from "../img/movie-ranker.jpg";
import portfolioImg from "../img/portfolio.jpg";

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
    }, 
    {
      id: 2,
      name: 'movie-ranker',
      description: '',
      path: '/projects/movie_ranker#',
      background: movie_rankerImg,
    }, 
    {
      id: 3,
      name: 'portfolio',
      description: '',
      path: '/projects/portfolio#',
      background: portfolioImg,
    }
  ]

  const arrowRef= useRef(null);

  return (
    <div className="slider-container mx-auto">
      <Slider ref={arrowRef} {...settings}>
        {projectList.map((project) => (<div className={"project-wrapper " + project.name} key={project.id}><HashLink to={project.path}><img src={project.background} alt="Project cover" /></HashLink></div>))}{projectList.map((project) => (<div className={"project-wrapper " + project.name} key={project.id}><HashLink to={project.path}><img src={project.background} alt="Project cover" /></HashLink></div>))}
      </Slider>
      <button className="btn-left interactable" onClick={() =>arrowRef.current.slickPrev()}><MdOutlineKeyboardArrowLeft/></button>
      <button className="btn-right interactable" onClick={() =>arrowRef.current.slickNext()}><MdOutlineKeyboardArrowRight/></button>
    </div>
  )
}

export default SliderComponent
