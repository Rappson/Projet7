import { urlBase } from "../../url";
import axios from "axios";



// const tokenHeaders = { headers: { Authorization: localStorage.getItem('jwtToken') } };
const takeToken = (keyToken) => {
   return { headers: { Authorization: keyToken } }
}


// POST / CREATE NEW POST
const newPostRequest = (body, token) => {
   return axios.post(urlBase + '/post/newPost', body, takeToken(token))
}

const getAllPost = (token) => {
   return axios.get(urlBase + '/post/getPost', takeToken(token))
}

const getOnePost = (id, token) => {
   return axios.get(urlBase + `/post/getOnePost/${id}`, takeToken(token))
}

const addNewLike = (dataLikes, token) => {
   return axios.post(urlBase + `/post/newLike`, dataLikes, takeToken(token))
}

const addNewComment = (body, token) => {
   return axios.post(urlBase + `/post/newComment`, body, takeToken(token))
}

const getComments = (id, token) => {
   return axios.get(urlBase + `/post/getComments/${id}`, takeToken(token))
}

// DELETE
const deleteComment = (id, token) => {
   return axios.delete(urlBase + `/post/deleteComment/${id}`, takeToken(token))
}

const deleteItem = (id, token) => {
   return axios.delete(urlBase + `/post/deletePost/${id}`, takeToken(token))
}

// CONNECT / SIGNUP 
const connectRequest = (body) => {
   return axios.post(urlBase + `/auth/login`, body)
}

const signupRequest = (body) => {
   return axios.post(urlBase + `/auth/signup`, body)
}


export { newPostRequest, getAllPost, getOnePost, addNewLike, addNewComment, getComments, deleteItem, deleteComment, connectRequest, signupRequest };