import Slider from "react-slick";
import { Link } from "react-router-dom";
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
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false
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
      name: 'Guessdle',
      description: '',
      path: '/',
      background: guessdleImg,
    }, 
    {
      id: 2,
      name: 'Movie Ranker',
      description: '',
      path: '/',
      background: movie_rankerImg,
    }, 
    {
      id: 3,
      name: 'Portfolio',
      description: '',
      path: '/',
      background: portfolioImg,
    }
  ]

  const arrowRef= useRef(null);

  return (
    <div className="container">
      <Slider ref={arrowRef} {...settings}>
        {projectList.map((project) => (<div className="wrapper"><Link to={project.path} key={project.id}><img src={project.background} alt="Project cover" /><h5 className="project-title text-start">{project.name}</h5><div className="description">{project.description}</div></Link></div>))}{projectList.map((project) => (<div className="wrapper"><Link to={project.path} key={project.id}><img src={project.background} alt="Project cover" /><h5 className="project-title text-start">{project.name}</h5><div className="description">{project.description}</div></Link></div>))}
      </Slider>
      <button className="btn-left" onClick={() =>arrowRef.current.slickPrev()}><MdOutlineKeyboardArrowLeft/></button>
      <button className="btn-right" onClick={() =>arrowRef.current.slickNext()}><MdOutlineKeyboardArrowRight/></button>
    </div>
  )
}

export default SliderComponent
