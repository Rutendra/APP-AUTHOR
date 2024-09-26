import React from "react";
import "./Home.css";
import { Link, Element } from 'react-scroll';


const Home = () => {
  return (
    <div className="home-container" name="home">
      <div className="sunflower sunflower-1 element" id="sunflower"></div>
      <div className="sunflower sunflower-2 element" id="sunflower"></div>
      <div className="welcome-text">
        <h1><span className="aa">App Author</span> <br/>Welcome's You</h1>
        <p className="home-para">We build what you imagine.</p>
      </div>
      <div className='getInTouchLink' onClick={() => window.location.href = 'tel:+918658525671'}>
          Get In Touch
        </div>
    </div>
  );
};

export default Home;
