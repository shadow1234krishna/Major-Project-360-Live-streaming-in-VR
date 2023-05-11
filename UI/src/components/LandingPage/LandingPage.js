import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import "./LandingPage.css";
import footballImage from "./kick.png";

import VideoBg from "./videobg.mp4";
function LandingPage() {
  const descriptionAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(-100%)" },
    to: { opacity: 1, transform: "translateX(0%)" },
    config: { duration: 1000 },
  });
  const imageAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(100%)" },
    to: { opacity: 1, transform: "translateX(0%)" },
    config: { duration: 1000 },
    });
   
  return (
    <>
     <div className="video-container">
      <video className="video" autoPlay loop>
        <source src={VideoBg} type="video/mp4" />
      </video>
  </div>

    <div className="landing-page">
        <animated.div style ={imageAnimation} className="image-container">
        <img src={footballImage} alt="football"  className="responsive-image" />
      </animated.div>
      <animated.div style={descriptionAnimation} className="description">
        <h1 className="live">Live Streaming Football</h1>
        <p>
          Get access to live streaming of all the top football leagues and
          competitions. Never miss a match again!
        </p>
      <Link to = '/signup'>  <button className="cta-button">Sign Up Now</button></Link>
      </animated.div>
    
      <Link to = '/login'><button className="click">Login</button></Link>
    </div>
    </>
  );
}

export default LandingPage;