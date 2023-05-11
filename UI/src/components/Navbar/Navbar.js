// import {React,useState,useEffect} from 'react';
// import Logo from "./LOGO.png";
// import './Navbar.css';
// // import UserProfile from '../UserProfile/UserProfile';


// const Navbar = ({logout}) => {
 
//   const [navbarClass] = useState('show-nav');



//   return (
//     <>
    
//    <header className={navbarClass}>
//       <div className="container">
//         <nav id="navigation">
//         {/* <UserProfile/> */}
//           <a href="#home" className="logo">
//             <img className = "kwdr" src={Logo} alt ="Logo"/>
//           </a>
//           <a aria-label="mobile menu" className="nav-toggle">
//             <span></span>
//             <span></span>
//             <span></span>
//           </a>
//           <ul className="menu-left">
//           <li><a href="#home" >Home</a></li>
//             <li><a href="#about">About</a></li>
//             <li><a href="#streams">Streams</a></li>
//             <li><a href="#news">News</a></li>
//             <li><a href="#contact">Contact Us</a></li>
            
//             <li>
//             <button className ="btn btn-danger" onClick={logout}> Logout</button></li>

//           </ul>
//         </nav>
//       </div>
//     </header>

//     <section id="about">
//         <div className="container">
//           <h1>Fully responsive navigation</h1>
//           <p>Mobile hamburger menu with css3 animations, animated links on hover, hide navigation on scroll down / show on scroll up (<a href="https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c#.xnr8amvlw">credit to Marius Craciunoiu</a>)</p>
          
//         </div>
//       </section><section id="Streams">
//         <div className="container">
//           <h1>Streams</h1>
//         </div>
//       </section><section id="news">
//         <div className="container">
//           <h1>News</h1>
//         </div>
//       </section><section id="contact">
//         <div className="container">
//           <h1>Contact Us</h1>
//         </div>
    
//       </section>
// </>
//   )
// }

// export default Navbar;

import React from 'react'
import './Navbar.css';
import Logo from "./LOGO.png";
import { Link } from 'react-router-dom';

const Navbar = ({logout}) => {
  return (
    
    <div class="nav-bar">
       <a href="#home" className="logo">
                <img className = "kwdr" src={Logo} alt ="Logo"/>  </a>
            <nav className="nav-container">
              
                <ul className="menu-left">




                
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/stream">Streams</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    

      

                    <li><button className ="btn btn-danger" onClick={logout}> Logout</button></li>
               </ul>
            </nav>

        </div>
  )
}

export default Navbar;