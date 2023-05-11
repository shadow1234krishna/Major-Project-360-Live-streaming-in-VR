import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import { actionTypes, useStateValue } from "../store";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Navbar/Navbar";
import axios from "axios";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Soccer from "./soccer.jpg";
import Nem from "./neymar.png";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [cookies] = useCookies(["jwt"]);
  const [profileData, setProfileData] = useState(null);
  const [, , removeCookie] = useCookies(["jwt"]);
  const [, dispatch] = useStateValue();
  const navigate = useNavigate();
  const logout = () => {
    removeCookie("jwt");
    dispatch({ type: actionTypes.SET_TOKEN, value: null });
    navigate("/login");
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const api = axios.create({
          baseURL: process.env.REACT_APP_SERVER,
        });
        const response = await api.get("/api/user/profile/", {
          headers: {
            Authorization: `Bearer ${cookies.jwt}`,
          },
        });
        setProfileData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProfileData();
  }, [cookies]);

  useEffect(() => {
    const text = "Experience the game like never before with Football VR Live Streaming.Our immersive virtual reality technology offers 360-degree views and realistic experience, bringing you right into the action. Watch all major leagues, choose from a range of subscription options and watch games on the go with our website. Join our community of passionate fans and watch now to take your viewing experience to the next level.";
    const autoWriteText = document.getElementById("auto-write-text");
    let index = 0;
    const interval = setInterval(() => {
      autoWriteText.textContent += text.charAt(index);
      index++;
      if (index >= text.length) {
        clearInterval(interval);
      }
    }, 50);
  }, []);

  return (
    <>
      <div className="home">
        <div className="header">
          <FontAwesomeIcon icon={faUser} />
          <div className="profile-data">
            {profileData && (
              <>
                <p className="wel-text">WELCOME &nbsp; &nbsp;</p>
                <p>{profileData.email}</p>
              </>
            )}
          </div>
        </div>
        <div className="homepage">
          <NavBar logout={logout} />
          <div className="image-c">
          <img src={Soccer} alt="ronaldo" className="soccer" />
          <img src={Nem} alt="Neymar" className="nem" />
          <div className="text-o">
            <p id="auto-write-text"></p>
            <div class="button__holder">
    <h2>WATCH NOW &rarr;</h2>
   <Link to ="/stream"> <button className="plus"></button> </Link>
</div>
          </div>
          </div>
          
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
