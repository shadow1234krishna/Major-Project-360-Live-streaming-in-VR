import { Form, Formik } from "formik";

import React from "react";
import { useCookies} from "react-cookie";
import { useMutation } from "react-query";
import { useNavigate } from "react-router";
import "./Login.css";


import { login } from "../networkCalls";
import { actionTypes, useStateValue } from "../store";
import { InputControl } from "formik-chakra-ui";
import LImage from "./login.png";
import { useSpring, animated } from "react-spring";


const Login = () => {
  const [, setCookie] = useCookies(["jwt"]);
  const [{ token }, dispatch] = useStateValue();
  console.log(token);
  const navigate = useNavigate();
  const { isError,  mutateAsync } = useMutation(
    "login",
    login,
    {
      onSuccess: (data) => {
        dispatch({ type: actionTypes.SET_TOKEN, value: data.token });
        setCookie("jwt", data.token);
        
        navigate("/home");
      },
    }
  );


  if (isError) {
    
    alert("Please Enter Valid Id and Password");
  }
  const signup = () => {
    navigate("/signup");
  }
    const forgot = () => {
      navigate("/forgotpassword");


}
const imageAnimation = useSpring({
  from: { opacity: 0, transform: "translateX(100%)" },
  to: { opacity: 1, transform: "translateX(0%)" },
  config: { duration: 1000 },
  });



  return (

    <>

    <div className="Box-front">
       <animated.div style ={imageAnimation} className="image-con">
        <img src={LImage} alt="football"  className="response-image" />
      </animated.div>
   


        <Formik
          initialValues={{ email: "hello1@gmail.com", password: "1234567" }}
          onSubmit={async (values) => {
            try {
             await mutateAsync({
                email: values.email,
                password: values.password,
              
              });
            } catch (error) {
              console.log(error);
            }
          }}
        >
          <Form>
          <div class="login">
	<h1>Login</h1>
    
  <InputControl
              label="Email:"
              name="email"
              inputProps={{
                type: "email",
                placeholder: "Enter Email...",
                focusBorderColor: "blue.400",
              }}
            />
            <InputControl
              label="Password:"
              name="password"
              inputProps={{
                type:"password",
                placeholder: "Enter Password...",
                focusBorderColor: "blue.400",
              }}
             
            />
        <button type="submit" 
        
        className="btn btn-success btn-block btn-large">Login</button>
    
    <button className="btn btn-primary btn-block btn-large"
              type="submit"
              onClick={signup }
            >

              Signup
            </button>
            <button  className="btn btn-warning btn-block btn-small"
              type="submit"
              onClick={forgot}
            >
              Forgot Password?
              
            </button>
           
</div>
         
            

            
            
           
            
           
          </Form>
          
        </Formik>
  
     
    </div>
</>
  );
};

export default Login;





// import { Form, Formik } from "formik";
// import React from "react";
// import axios from "axios";
// import { useCookies } from "react-cookie";
// import { useMutation } from "react-query";
// import { useNavigate } from "react-router";
// import "./Login.css";
// import { actionTypes, useStateValue } from "../store";
// import { InputControl } from "formik-chakra-ui";
// import LImage from "./login.png";
// import { useSpring, animated } from "react-spring";

// const Login = () => {
//   const [, setCookie] = useCookies(["jwt"]);
//   const [{ token }, dispatch] = useStateValue();
//   console.log(token);
//   const navigate = useNavigate();
//   const { isError, mutateAsync } = useMutation("login", handleLogin);
//   const api = axios.create({
//     baseURL: process.env.REACT_APP_SERVER,
//   });
//   async function handleLogin(values) {
//     try {
//       const response = await api.post("/api/user/login/user/",
//         {
//           email: values.email,
//           password: values.password,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: "Bearer " + localStorage.getItem("token"),
//           },
//         }
        
//       );
//       const data = response.data;
//       dispatch({ type: actionTypes.SET_TOKEN, value: data.token });
//       setCookie("jwt", data.token);

//       navigate("/home");
//     } catch (error) {
//       console.log(error);
//       alert("Please Enter Valid Id and Password");
//     }
//   }

//   if (isError) {
//     alert("Please Enter Valid Id and Password");
//   }

//   const signup = () => {
//     navigate("/signup");
//   };

//   const forgot = () => {
//     navigate("/forgotpassword");
//   };

//   const imageAnimation = useSpring({
//     from: { opacity: 0, transform: "translateX(100%)" },
//     to: { opacity: 1, transform: "translateX(0%)" },
//     config: { duration: 1000 },
//   });

//   return (
//     <>
//       <div className="Box-front">
//         <animated.div style={imageAnimation} className="image-con">
//           <img src={LImage} alt="football" className="response-image" />
//         </animated.div>

//         <Formik
//           initialValues={{ email: "hello1@gmail.com", password: "1234567" }}
//           onSubmit={async (values) => {
//             try {
//               await mutateAsync(values);
//             } catch (error) {
//               console.log(error);
//             }
//           }}
//         >
//           <Form>
//             <div className="login">
//               <h1>Login</h1>

//               <InputControl
//                 label="Email:"
//                 name="email"
//                 inputProps={{
//                   type: "email",
//                   placeholder: "Enter Email...",
//                   focusBorderColor: "blue.400",
//                 }}
//               />
//               <InputControl
//                 label="Password:"
//                 name="password"
//                 inputProps={{
//                   type: "password",
//                   placeholder: "Enter Password...",
//                   focusBorderColor: "blue.400",
//                 }}
//               />
//               <button
//                 type="submit"
//                 className="btn btn-success btn-block btn-large"
//               >
//                 Login
//               </button>

//               <button
//                 className="btn btn-primary btn-block btn-large"
//                 type="submit"
//                 onClick={signup}
//               >
//                 Signup
//               </button>

//               <button
//                 className="btn btn-warning btn-block btn-small"
//                 type="submit"
//                 onClick={forgot}
//               >
//                 Forgot Password?
//               </button>
//             </div>
//           </Form>
//         </Formik>
//       </div>
//     </>

//   );
// };

// export default Login;