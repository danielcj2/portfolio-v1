import { BsSendFill } from "react-icons/bs";
import SectionHeading from "./SectionHeading";

const Contact = () => {
  return (
    <div className="pattern">
      <div className="section d-flex justify-content-around align-items-center">
        <div className="contact text-center">
            <SectionHeading head="Contact" title="Get In Touch" />
            <form action="post" className="d-flex flex-column">
              <label htmlFor="name-textbox">NAME</label>
              <input type="text" id="name-textbox" autoComplete="off" />
              <label htmlFor="email-textbox">EMAIL</label>
              <input type="email" id="email-textbox" autoComplete="off" />
              <label htmlFor="message-textbox">MESSAGE</label>
              <textarea id="message-textbox" rows="5"></textarea>
              <div className="d-flex justify-content-end">
                <button className="send-btn">Hit me up <BsSendFill /></button>
              </div> 
            </form>
                       
        </div>
      </div>
    </div>
    
  )
}

export default Contact
