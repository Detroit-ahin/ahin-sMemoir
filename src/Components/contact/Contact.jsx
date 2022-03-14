import { useState,useRef } from "react";
import "./contact.scss";
import emailjs from "emailjs-com";

export default function Contact() {
  // const [message, setMessage] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setMessage(true);
  // };
 
    const formRef = useRef();
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_2pudk8i",
          "template_sb5l5p2",
          formRef.current,
          "user_jAr8u9PeLAtwSZMGpNoCU"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true)
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/Contact.png" alt="" />
      </div>
      <div className="right">
        <h2>Contact With Me </h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="user_name"/>
          <input type="text" placeholder="Subject" name="user_subject"/>
          <input type="text" placeholder="Email" name="user_email"/>
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Send</button>
          {done && <span>Thanks, I'll reply you ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}