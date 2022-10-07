import React from 'react'
import { Link } from 'react-router-dom'
import './contact.css'
import NavBars from '../component/reuseable/NavBars'
import Footer from '../component/reuseable/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocation, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons'
import ContactForm from '../component/reuseable/ContactForm'
import Map from '../component/reuseable/Map'


const Contact = () => {
  return (
    <>
    <NavBars />
    <div className='contacts'>
        <div className='contact-top'>
            <div className='contact-top-head'>
                <h1>Contact Us</h1>
                <p>Have any question? we will love to hear from you</p>
            </div>

            <div className='contact-top-cont'>
                <div className='cont1'>
                    <h3>Press</h3>
                    <p>Are you intreasted in our latest working on information
                        gathering about cars and you want us to get intouch with
                        you?
                    </p>

                    <button type="button" className='contact-button-light'>
                    <Link to="dev">Visit Press Page</Link>
                    </button>
                </div>
                <div className='cont2'>
                    <h3>Help & Support</h3>
                    <p>
                        Our Support team is spread across the globe to give you answers fast.
                    </p>

                    <button type="button" className='contact-button-deep'>
                    <Link to="dev">Visit Support Page</Link>
                    </button>
                    <span>submit a request</span>
                </div>
                <div className='cont1 cont-can'>
                    <h3>Sales</h3>
                    <p>
                        Get in touch with our sales team to see how we can work together.
                    </p>

                    <button type="button" className='contact-button-light sales'>
                    <Link to="dev">Sales</Link>
                    </button>
                </div>
            </div>
        </div>

        <div  className='contact-bottom'>
            <div className='contact-bottom-left'>
                <span>
                <FontAwesomeIcon icon={faPhone} color="white"/>
                <p>08122131234</p>
                </span>
                <span>
                <FontAwesomeIcon icon={faMessage} color="white"/>
                <p>Opaferanmi01@gmail.com</p>
                </span>
                <span>
                <FontAwesomeIcon icon={faMapLocation} color="white"/>
                <p>Agd 13 Ima estate</p>
                </span>
            </div>
            <div className='contact-bottom-right'>
            < ContactForm/>
            </div>
        </div>

        <div className='contact-map'>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Contact