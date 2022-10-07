import React from 'react'
import { useRef } from "react";
import emailjs from "@emailjs/browser";


const Newsletter = () => {

    const refFrom = useRef();

    //refs for storages 
    const nameRef = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_sj47dpj",
          "template_g20nlx9",
          refFrom.current,
          "mW8WFQdas_Oc08y-M"
        )
        .then(
          () => {
            alert("Message sucessfully sent!");
            console.log("sucess");
            window.location.reload(false);
          },
          () => {
            alert("Failed to send the message, Please try again ");
            console.log("failed");
          }
        );
    };
    //getting the input value of user name 

    const saveUserDetails = () => {
        const userName = [nameRef.current.value]
        localStorage.setItem('username', userName)
        console.log('username saved')
    }
    
  return (
    <div>
        <div className="contact-form">
            <form ref={refFrom} onSubmit={sendEmail}>
              <span>
                <input
                  className="half"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  ref={nameRef}
                />

                <input
                  className="half"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </span>

              <textarea
                placeholder="Message"
                name="message "
                required
              ></textarea>

              <input type="submit" className="flat-button" value="SIGN UP" onClick={saveUserDetails}/>
            </form>
          </div>
    </div>
  )
}

export default Newsletter