import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { BsSendFill } from "react-icons/bs";
import { BsExclamationCircle } from "react-icons/bs";

const Form = ({blur, focus}) => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ed5dyuc', 'template_ish4sog', form.current, 'waiqH8816mDwvpKL4')
        .then((result) => {
            console.log(result.text);
            window.location.reload(true);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    const [values, setValues] = useState({
      user_name:"",
      user_email:"",
      message:"",
    });

    const [focused, setFocused] = useState({
        user_name: false,
        user_email: false,
        message: false,
    });

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    }
  
    const handleFocus = (e) => {
      setFocused({...focused, [e.target.name]: true});
    }

    // console.log(values);
  
    return (
        <form ref={form} onSubmit={sendEmail} className="d-flex flex-column">
            <label>NAME</label>
            <input type="text" id="name-textbox" name="user_name" autoComplete="off" value={values.user_name} onChange={handleChange} onBlur={handleFocus} focused={focused.user_name.toString()} required />
            <span className="inputSpan text-left align-items-center"><BsExclamationCircle />Name cannot be empty</span>
            <label>EMAIL</label>
            <input type="email" id="email-textbox" name="user_email" autoComplete="off" value={values.user_email} onChange={handleChange} onBlur={handleFocus} focused={focused.user_email.toString()} required />
            <span className="inputSpan text-left align-items-center"><BsExclamationCircle />Invalid email</span>
            <label>MESSAGE</label>
            <textarea id="message-textbox" name="message" rows="5" value={values.message} onChange={handleChange} onBlur={handleFocus} focused={focused.message.toString()} required ></textarea>
            <span className="txtSpan text-left align-items-center"><BsExclamationCircle />Message cannot be empty</span>
            <div className="d-flex justify-content-end">
            <button type="submit" className="send-btn">Hit me up <BsSendFill /></button>
            </div> 
        </form>
    )
}

export default Form
