import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";

import Home from "./Home/Home";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Video from "./components/Video/Video";
import Forgotpassword from "./components/ForgotPassword/Forgotpassword";
import { QueryClient, QueryClientProvider } from "react-query";
import { actionTypes, useStateValue } from "./store";
import { useCookies } from "react-cookie";

import "./App.css"
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import News from "./components/News/News";
import Contact from "./components/Contact/Contact";

export function App(){
  const queryClient = new QueryClient();

  const [cookie] = useCookies(["jwt"]);
  const [{ token }, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const setToken = () => {
      const { jwt } = cookie;
      if (jwt) {
        dispatch({ type: actionTypes.SET_TOKEN, value: jwt });
      }
    };
    if (token === null) {
      setToken();
    }
    setIsLoading(false);
  }, [dispatch, token, cookie]);

  return (
    <div className ="App">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/home"
              element={
                isLoading ? (
                  <div>Loading...</div>
                ) : token ? (
                  <Home />
                ) : (
                  <Navigate replace to="/login" />
                )
              }
            />
            <Route
              path="/signup"
              element={!token ? <Signup /> : <Navigate replace to="/login" />}
            />
            <Route
              path="/forgotpassword"
              element={<Forgotpassword />}
            />
            <Route
              path="/stream"
              element={
                isLoading ? (
                  <div>Loading...</div>
                ) : token ? (
                  <Hero />
                ) : (
                  <Navigate replace to="/login" />
                )
              }
            />
            <Route
              path="/video"
              element={
                isLoading ? (
                  <div>Loading...</div>
                ) : token ? (
                  <Video />
                ) : (
                  <Navigate replace to="/login" />
                )
              }
            />
            <Route
              path="/about"
              element={
                isLoading ? (
                  <div>Loading...</div>
                ) : token ? (
                  <About />
                ) : (
                  <Navigate replace to="/login" />
                )
              }
            />
            <Route
              path="/news"
              element={
                isLoading ? (
                  <div>Loading...</div>
                ) : token ? (
                  <News />
                ) : (
                  <Navigate replace to="/login" />
                )
              }
            />
            <Route
              path="/contact"
              element={
                isLoading ? (
                  <div>Loading...</div>
                ) : token ? (
                  <Contact />
                ) : (
                  <Navigate replace to="/login" />
                )
              }
            />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
};


export default App;
