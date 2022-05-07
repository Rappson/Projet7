import { urlBase } from "../../url";
import axios from "axios";



const tokenHeaders = { headers: { Authorization: localStorage.getItem('jwtToken') } };
const takeToken = (test) => {
   return { headers: { Authorization: test } }
}


// POST / CREATE NEW POST
const newPostRequest = (body) => {
   return axios.post(urlBase + '/post/newPost', body, tokenHeaders)
}

const getAllPost = (token) => {
   return axios.get(urlBase + '/post/getPost', takeToken(token))
}

const getOnePost = (id) => {
   return axios.get(urlBase + `/post/getOnePost/${id}`, tokenHeaders)
}

const addNewLike = (dataLikes) => {
   return axios.post(urlBase + `/post/newLike`, dataLikes, tokenHeaders)
}
const deleteItem = (id) => {
   return axios.delete(urlBase + `/post/deletePost/${id}`, tokenHeaders)
}

// CONNECT / SIGNUP 
const connectRequest = (body) => {
   return axios.post(urlBase + `/auth/login`, body)
}

const signupRequest = (body) => {
   return axios.post(urlBase + `/auth/signup`, body)
}


export { newPostRequest, getAllPost, getOnePost, addNewLike, deleteItem, connectRequest, signupRequest };