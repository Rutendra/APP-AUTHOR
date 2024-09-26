import React from 'react'
import './Contact.css'
import mike from './photos/mike.png'
import { Link, Element } from 'react-scroll';


function Contact() {
  return (
    <div name="contact">
      <div className='page3'>
      <div className='p3Box'>
        <h1 className='contactHeading'>get started with us</h1>
        <p className='conatctDesc'>At aa, we are committed to turning your vision into reality. Whether you're looking to build a cutting-edge mobile app, a sleek website, or transform your business digitally, our team of experts is here to guide you every step of the way.

With our innovative approach, attention to detail, and passion for delivering top-tier results, we ensure your project is not only functional but also stands out from the crowd. From startups to established enterprises, we’ve helped clients achieve their goals faster, smarter, and with unparalleled quality.understand.</p>
        <div className='getInTouchLink2' onClick={() => window.location.href = 'tel:+918658525671'}>
          Get In Touch
        </div>
        {/* <h4 className='gmail'>Gmail : rutendrakumarsahoo@gmail.com</h4> */}
        {/* <InstagramIcon color='white'/> */}
      </div>
      <div className='rutu'>
         <small>Made with <span class="heart">♥</span> by : APP AUTHOR</small>
         <small>To build websites like this contact: +91 8658525671</small>
      </div>
    </div>
    </div>
  )
}

export default Contact
