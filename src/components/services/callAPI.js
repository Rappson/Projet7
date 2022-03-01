import { urlBase } from "../../url";
import axios from "axios";


const tokenHeaders = { headers: { Authorization: localStorage.getItem('jwtToken') } };

// POST / CREATE NEW POST
const newPostRequest = (body) => {
   return axios.post(urlBase + '/post/newPost', body, tokenHeaders)
}

const getAllPost = () => {
   return axios.get(urlBase + '/post/getPost', tokenHeaders)
}

// CONNECT / SIGNUP 
const connectRequest = (body) => {
   return axios.post(urlBase + `/auth/login`, body)
}

const signupRequest = (body) => {
   return axios.post(urlBase + `/auth/signup`, body)
}

export {newPostRequest, getAllPost, connectRequest, signupRequest};