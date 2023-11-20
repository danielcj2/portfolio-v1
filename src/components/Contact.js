import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { BsSendFill } from "react-icons/bs";
import SectionHeading from "./SectionHeading";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ed5dyuc', 'template_ish4sog', form.current, 'waiqH8816mDwvpKL4')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
    <div className="pattern">
      <div className="section d-flex justify-content-around align-items-center">
        <div className="contact text-center">
            <SectionHeading head="Contact" title="Get In Touch" />
            <form ref={form} onSubmit={sendEmail} className="d-flex flex-column">
              <label>NAME</label>
              <input type="text" id="name-textbox" name="user_name" autoComplete="off" />
              <label>EMAIL</label>
              <input type="email" id="email-textbox" name="user_email" autoComplete="off" />
              <label>MESSAGE</label>
              <textarea id="message-textbox" name="message" rows="5"></textarea>
              <div className="d-flex justify-content-end">
                <button type="submit" className="send-btn">Hit me up <BsSendFill /></button>
              </div> 
            </form>
                       
        </div>
      </div>
    </div>
    
  )
}

export default Contact
