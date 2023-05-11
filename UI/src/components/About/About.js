import React from 'react';
import Navbar from '../Navbar/Navbar';
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import { actionTypes, useStateValue } from "../../store";

import"./About.css";
const About = () => {
  const [, , removeCookie] = useCookies(["jwt"]);
  const [, dispatch] = useStateValue();
  const navigate = useNavigate();
  const logout = () => {
    removeCookie("jwt");
    dispatch({ type: actionTypes.SET_TOKEN, value: null });
    navigate("/login");
  };
  return (

 
    <>
  <Navbar logout={logout}/>
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" /><script src="https://kit.fontawesome.com/8fe048c345.js" crossorigin="anonymous"></script><title>Homepage With CSS GRID</title><body>
      <main class="main-grid">
        <div class="head">
          <h1 class="page-title">About us</h1>
          <p class="subtitle">We are specialsts in web development. Creativity and fun are our ingredients for awesome work.</p>
        </div>
        <img class="main-image" src="https://gkmit.s3.ap-south-1.amazonaws.com/blog/articles/devops.png" alt="" />

        <div class="main-text">
          <h2 class="section-title">We're really great guys</h2>
          <p>Coding is a passion, and our team is the best you can get to thrive in your project.Our strengths are HTML, CSS & Javascript.If you want to learn more, please have a look at our Portfolio.</p>
          <p>We have learned everything from scratch and spend sleepless nights to learn all the fundamentals es well as the advanced stuff to create projects. We love to work in a co-working space and that´s why you will not find us a "normal" office.</p>

          <h2 class="section-title sub">We can do all sorts of great stuff </h2>
          <p>Honestly, we would like to support you with your project. We will get results together and at the end of the day, what else matters?</p>
          <p>So sure, maybe we're a bit different from what you'd expect, but if you want to get a professional Web presence we're the guys for you.</p>
        </div>

      </main>

      <footer class="footer main-grid">
        <div class="footer-text">
          <p class="end">Awesome, you studied our page. Please follow us on our social media accounts. They are linked on the right site. You can`t miss the icons. If you liked our projects we would be more than happy to work for you.</p>
          <p class="copyright">© TEAM KWDR 2022</p>
        </div>
        <div class="social">
          <a href="#" class="facebook icon"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="twitter icon"><i class="fab fa-twitter"></i></a>
          <a href="#" class="instagram icon"><i class="fab fa-instagram"></i></a>
        </div>
      </footer>
    </body></>


      )
      }

export default About;