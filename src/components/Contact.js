// import SectionHeading from "./SectionHeading";
import Form from './Form';
import { IoMdMail } from "react-icons/io";
import RevealFramer from './RevealFramer';
import { ReactComponent as ContactBackground } from "../assets/svg/corner-background.svg";
import { ReactComponent as ContactBackgroundLight } from "../assets/svg/corner-background-light.svg";
import { useTheme } from './ThemeContext';

const Contact = () => {  
  const darkTheme = useTheme();

  return (
    <>
      <hr />
      <div className="section d-flex flex-row align-items-stretch justify-content-center">
        <div className="flex-fill">
          <RevealFramer>
            <div className="section-heading">Get in Touch</div>
            <h2 className="section-title">I'd love to hear from you.</h2>
          </RevealFramer>
          <div className="email-fill">
            <RevealFramer><h5>Got a question, or just want to say hello?</h5></RevealFramer>
            <RevealFramer>
              <h6>CONTACT</h6>
              <a href="mailto:danielcojocea18@gmail.com" className="interactable"><IoMdMail /> danielcojocea18@gmail.com</a>
            </RevealFramer>
          </div>
        </div>  
        <div className="contact text-center flex-fill" id="contact">
          {/* <SectionHeading head="Contact" title="Get In Touch" /> */}
          <RevealFramer><Form /></RevealFramer>
        </div>
        <div className="contact-background">{ darkTheme ? <ContactBackground/> : <ContactBackgroundLight />}</div>
      </div>
      <hr />
    </>
       
  )
}

export default Contact
