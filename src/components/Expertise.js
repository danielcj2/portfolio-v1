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
  return (
    <div className="section d-flex justify-content-around align-items-center">
        <div className="expertise text-center">
            <div className="section-heading">02. Expertise</div>
            <h2 className="section-title">Skills & Competencies</h2>
            <p>I've been doing web development for a little while now, and I'm continuously eager to learn more in this ever growing fast paced industry.</p>
            <div className="f-container">
                <p>SOME TECHNOLOGIES I'VE WORKED WITH:</p>
                <div className="frameworks row justify-content-center">
                    <div className="col-2">
                        <img id="javascript" src={JavaScript} alt="Javascript Icon" />
                        <label className="row justify-content-center" htmlFor="javascript">Javascript</label>
                    </div>
                    <div className="col-2">
                        <img id="html" src={Html} alt="Html Icon" />
                        <label className="row justify-content-center" htmlFor="html">HTML5</label>
                    </div>
                    <div className="col-2">
                        <img id="css" src={Css} alt="Css Icon" />
                        <label className="row justify-content-center" htmlFor="css">CSS</label>
                    </div>
                    <div className="col-2">
                        <img id="php" src={Php} alt="Php Icon" />
                        <label className="row justify-content-center" htmlFor="php">PHP</label>
                    </div>
                    <div className="col-2">
                        <img id="sql" src={Sql} alt="Sql Icon" />
                        <label className="row justify-content-center" htmlFor="sql">SQL</label>
                    </div>
                    <div className="col-2">
                        <img id="react" src={ReactSvg} alt="React Icon" />
                        <label className="row justify-content-center" htmlFor="react">React</label>
                    </div>
                    <div className="col-2">
                        <img id="bootstrap" src={Bootstrap} alt="Bootstrap Icon" />
                        <label className="row justify-content-center" htmlFor="bootstrap">Bootstrap</label>
                    </div>
                    <div className="col-2">
                        <img id="jquery" src={Jquery} alt="Jquery Icon" />
                        <label className="row justify-content-center" htmlFor="jquery">jQuery</label>
                    </div>
                    <div className="col-2">
                        <img id="figma" src={Figma} alt="Figma Icon" />
                        <label className="row justify-content-center" htmlFor="figma">Figma</label>
                    </div>
                    <div className="col-2">
                        <img id="csharp" src={Csharp} alt="C# Icon" />
                        <label className="row justify-content-center" htmlFor="csharp">C#</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Expertise
