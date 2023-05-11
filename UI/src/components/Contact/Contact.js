import React from 'react';
import Navbar from '../Navbar/Navbar';
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import { actionTypes, useStateValue } from "../../store";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Contact.css";
import Contactc from "./contact.jpg";

const Contact = () => {
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
      <Navbar logout={logout} />
      <div className="containerc">
        <div className="contentc">
          <div className="left-sides">
            <div className="address details">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <div className="topic">Address</div>
              <div className="text-one">Bhubaneswar,Odisha</div>
              <div className="text-two">College CVRGU</div>
            </div>
            <div className="phone details">
              <FontAwesomeIcon icon={faPhoneAlt} />
              <div className="topic">Phone</div>
              <div className="text-one">+123 456 789</div>
              <div className="text-two">+987 654 321</div>
            </div>
            <div className="email details">
              <FontAwesomeIcon icon={faEnvelope} />
              <div className="topic">Email</div>
              <div className="text-one">someone@gmail.com</div>
              <div className="text-two">nobody@gmail.com</div>
            </div>
          </div>
          <div className="right-sides">
            <div className="image-containerss">
            

                <div className="titles">
    <div className="titles-inner">
      <div className="cafe">
        <div className="cafe-inner">Feel Free!</div>
      </div>
      <div className="mozart">
        <div className="mozart-inner">To Contact!</div>
      </div>
    </div>
  </div>

4
    <img src={Contactc} alt='contact' className='images'/>
  
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
