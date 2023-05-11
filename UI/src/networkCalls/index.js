import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
});

export const login = async ({ email, password }) => {
  try {
    const { data } = await api.post("/api/user/login/user/", { email, password });
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const signup = async ({ name, email, password,password2}) => {
  try {
    const { data } = await api.post("/api/user/register/", { name, email, password ,password2});
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};


// const apii = axios.create({
//   baseURL: process.env.REACT_APP_SERVER_ID,
// });
// export const stream = async ({ id,description,embed_code}) => {
//   try {
//     const { data } = await apii.get(`/api/streams/matches/${id}`, {id,description,embed_code });
//     return data;
//   } catch (error) {
//     throw Error(error.response.data.message);
//   }
// };
// export const hero = async ({ id,description,embed_code}) => {
//   try {
//     const { data } = await apii.post("/api/streams/matches", {id,description,embed_code });
//     return data;
//   } catch (error) {
//     throw Error(error.response.data.message);
//   }
// };

// In "../networkCalls.js"

// In "../networkCalls.js"

// import axios from "axios";
// const api = axios.create({
//   baseURL: process.env.REACT_APP_SERVER,
// });
// export const login = async ({ email, password, token }) => {
//   const response = await api.post("/api/user/login/user/", {
//     email,
//     password,
//   }, {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return response.data;
// };

// export const signup = async ({ name, email, password, password2, token }) => {
//   const response = await api.post("/api/user/register/", {
//     name,
//     email,
//     password,
//     password2,

//   }, {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return response.data;
// };