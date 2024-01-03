// import SectionHeading from "./SectionHeading";
import Form from './Form';
import { IoMdMail } from "react-icons/io";

const Contact = () => {  
  return (
    <>
      <hr />
      <div className="section d-flex flex-row align-items-stretch">
        <div className="order-2 flex-fill">
          <div className="section-heading">Get in Touch</div>
          <h2>I'd love to hear from you.</h2>
          <div className="email-fill">
            <h5>Got a question, or just want to say hello?</h5>
            <h6>CONTACT</h6>
            <a href="mailto:danielcojocea18@gmail.com" className="align-"><IoMdMail /> danielcojocea18@gmail.com</a>
          </div>
        </div>  
        <div className="contact text-center flex-fill" id="contact">
          {/* <SectionHeading head="Contact" title="Get In Touch" /> */}
          <Form />
        </div>
      </div> 
    </>
       
  )
}

export default Contact
