import React from "react";
import { useRef } from "react";
import "./footer.css";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSkype,
  faTelegram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const refFrom = useRef();

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

  return (
    <div className="footer">
      <div className="footer-main">
        <div className="row1">
          <h1>Don't Miss Out</h1>
          <p>
            Sign up for the latest cars models, products samples and details
          </p>

          <div className="contact-form">
            <form ref={refFrom} onSubmit={sendEmail}>
              <span>
                <input
                  className="half"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
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

              <input type="submit" className="flat-button" value="SIGN UP" />
            </form>
          </div>

          <p>
            This site is intended for Us car dealers. By signing up, you
            understand and agree that your data will be collected and used to
            send you newsletters about news cars added to our collections.
          </p>

          <div className="footericon">
            <span>
              {" "}
              <a href="www.twitter.com">
                <FontAwesomeIcon icon={faTwitter} color="aqua" />
              </a>{" "}
            </span>
            <span>
              {" "}
              <a href="www.youtube.com">
                <FontAwesomeIcon icon={faYoutube} color="aqua" />
              </a>{" "}
            </span>
            <span>
              {" "}
              <a href="www.telegram.com">
                <FontAwesomeIcon icon={faTelegram} color="aqua" />
              </a>{" "}
            </span>
            <span>
              {" "}
              <a href="www.linkedin.com">
                <FontAwesomeIcon icon={faLinkedin} color="aqua" />
              </a>{" "}
            </span>
            <span>
              {" "}
              <a href="www.instagram.com">
                <FontAwesomeIcon icon={faInstagram} color="aqua" />
              </a>{" "}
            </span>
            <span>
              {" "}
              <a href="www.skype.com">
                <FontAwesomeIcon icon={faSkype} color="aqua" />
              </a>{" "}
            </span>
            <span>
              {" "}
              <a href="www.facebook.com">
                <FontAwesomeIcon icon={faFacebook} color="aqua" />
              </a>{" "}
            </span>
          </div>
        </div>
        <div className="row2">
          <h2>Links To pages</h2>
          <span><NavLink exact="true" to="/" activeclassname="active" className="home">
            Home
          </NavLink>
          <NavLink exact="true" to="store" activeclassname="active" className="store">
            Store
          </NavLink>
          <NavLink exact="true" activeclassname="active" className="contact">
            Contact
          </NavLink>
          <NavLink exact="true" to="services" activeclassname="active" className="services">
            Services
          </NavLink></span>
        </div>
        <div className="row3">
        <h2>Other pages</h2>    
            <span><Link to='settings'>
              Settings
              </Link>
            <Link to='Privacy'>
              Privacy
              </Link>
            <Link to='profile'>
              Profile
              </Link>
            <Link to='offers'>
              Offers
              </Link></span>
        </div>
      </div>
      <hr />
      <div className="footer-submain-one">
        <div className="submain-one-left">
            <Link to="sitemap">SITE MAP</Link>
            <Link to="privacy ">PRIVACY</Link>
            <Link to="terms">TERMS</Link>
            <Link to="contentterms">USER CONTENT PERMISSION TERMS</Link>
            <Link to="faqs">FAQS</Link>
        </div>
        <div className="submain-one-right">
            <p>@ 2020 FOW Org </p>
            <span>BACK TO TOP  <FontAwesomeIcon color="white" className="footer-arrow" icon={faArrowAltCircleUp}/> </span>
        </div>
      </div>
        <hr/>
      <div className="footer-submain-two">
        <p>This site is intended for Us car delears. Cookies and related technology
            are used for advertising. To learn more, visit 
            <Link to="privacy">Privacy</Link> and 
            <a href="www.adchoice.com">AdChoices</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
