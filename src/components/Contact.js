import { BsSendFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="section d-flex justify-content-around align-items-center">
        <div className="contact d-flex flex-column">
            <div className="section-heading text-center">Contact</div>
            <h2 className="section-title text-center">Get In Touch</h2>
            <label htmlFor="name-textbox">NAME</label>
            <input type="text" id="name-textbox" autoComplete="off" />
            <label htmlFor="email-textbox">EMAIL</label>
            <input type="text" id="email-textbox" autoComplete="off" />
            <label htmlFor="message-textbox">MESSAGE</label>
            <textarea id="message-textbox" rows="5"></textarea>
            <div className="d-flex justify-content-end">
              <button className="send-btn">Hit me up <BsSendFill /></button>
            </div>            
        </div>
    </div>
  )
}

export default Contact
