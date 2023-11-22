import SectionHeading from "./SectionHeading";
import Form from './Form';

const Contact = () => {  
  return (
    <div className="pattern">
      <div className="section d-flex justify-content-around align-items-center">
        <div className="contact text-center">
            <SectionHeading head="Contact" title="Get In Touch" />
            <Form />
        </div>
      </div>
    </div>
    
  )
}

export default Contact
