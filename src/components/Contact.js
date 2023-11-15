
const Contact = () => {
  return (
    <div className="section d-flex justify-content-around align-items-center">
        <div className="contact d-flex flex-column">
            <div className="section-heading text-center">04. Contact</div>
            <h2 className="section-title text-center">Get In Touch</h2>
            <label htmlFor="name-textbox">NAME</label>
            <input type="text" id="name-textbox" autoComplete="off" placeholder="..." />
            <label htmlFor="email-textbox">EMAIL</label>
            <input type="text" id="email-textbox" autoComplete="off" placeholder="..." />
            <label htmlFor="message-textbox">MESSAGE</label>
            <textarea id="message-textbox" rows="10" placeholder="..."></textarea>
            <button className="send-btn btn">Hit me up</button>
        </div>
    </div>
  )
}

export default Contact
