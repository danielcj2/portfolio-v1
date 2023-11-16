import JavaScript from "../svg/js.svg";
import Html from "../svg/html.svg";
import Css from "../svg/css.svg";
import Php from "../svg/php.svg";
import Sql from "../svg/sql.svg";
import ReactSvg from "../svg/react.svg";
import Bootstrap from "../svg/bootstrap.svg";
import Jquery from "../svg/jquery.svg";
import Figma from "../svg/figma.svg";
import Csharp from "../svg/csharp.svg";



const Expertise = () => {
  const techItems=[
    {
        name: 'javascript',
        icon: JavaScript,
    },
    {
        name: 'html',
        icon: Html,
    },
    {
        name: 'css',
        icon: Css,
    },
    {
        name: 'php',
        icon: Php,
    },
    {
        name: 'sql',
        icon: Sql,
    },
    {
        name: 'react',
        icon: ReactSvg,
    },
    {
        name: 'bootstrap',
        icon: Bootstrap,
    },
    {
        name: 'jquery',
        icon: Jquery,
    },
    {
        name: 'figma',
        icon: Figma,
    },
    {
        name: 'c#',
        icon: Csharp,
    }
  ]
  
  return (
    <div className="section d-flex justify-content-around align-items-center">
        <div className="expertise text-center">
            <div className="section-heading">Expertise</div>
            <h2 className="section-title">Skills & Competencies</h2>
            <p>I've been doing web development for a little while now, and I'm continuously eager to learn more in this ever growing fast paced industry.</p>
            <div className="f-container">
                <p>SOME TECHNOLOGIES I'VE WORKED WITH:</p>
                <div className="frameworks row justify-content-center">
                    {techItems.map((item, index) => (<div className="col-2"><img id={index} src={item.icon} alt={item.name + " icon"} /><label className="tech-name row justify-content-center" htmlFor={index}>{item.name}</label></div>))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Expertise
