import { React, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Hero.css";
import "../Video/Video";
import { useCookies } from "react-cookie";
import { actionTypes, useStateValue } from "../../store";
import Navbar from '../Navbar/Navbar';
import Footer from "../Footer/Footer";
import axios from "axios";

export function Hero(props) {
	const [cookies] = useCookies(["jwt"]);
  const [state, setState] = useState({
    datas: [],
    DataisLoaded: false
  });

  useEffect(() => {
    const api = axios.create({
      baseURL: process.env.REACT_APP_SERVER,
    });

    api.get("/api/user/profile/", {
      headers: {
        Authorization: `Bearer ${cookies.jwt}`,
      },
    })
      .then((response) => {
        
		fetch(`http://127.0.0.1/api/streams/matches?format=json`, {
			headers: {
			  'Authorization': `Bearer ${cookies.jwt}`
			}
		  })
          .then((res) => res.json())
          .then((json) => {
            setState({
              datas: json,
              DataisLoaded: true
            });
          })
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const { DataisLoaded, datas } = state;

  const navigate = useNavigate();
  const Matches = () => {
    navigate("/video");
  }

  const [, , removeCookie] = useCookies(["jwt"]);
  const [, dispatch] = useStateValue();
  const logout = () => {
    removeCookie("jwt");
    dispatch({ type: actionTypes.SET_TOKEN, value: null });
    navigate("/login");
  };

  return (
    <>
      <Navbar logout={logout} />

      <div className="Hero">
        {!DataisLoaded && <h1>Please wait some time....</h1>}
        {DataisLoaded && datas.map((data) => (
          <main className="page-content" key={data.id}>
            <div className="card">
              <div className="content">
                <h2 className="title">{data.description}</h2>
                <button className="btn" onClick={Matches}>Click Here to Watch</button>
              </div>
            </div>
          </main>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Hero;
