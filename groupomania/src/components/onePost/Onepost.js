import { React, useState, useContext } from 'react'
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOnePost, addNewLike, addNewComment, deleteItem } from "../services/callAPI";
import "../../style/homepage/header.css"
import '../../style/onePost.css';
import Header from "../homepage-components/Header";
import { tokenContext } from '../services/useToken';


const OnePost = () => {
    const { id } = useParams();
    const [ postObject, setPostObject ] = useState({})
    const [ dataLikes, setDataLikes ] = useState({ likeData: 0 })
    const [ tokenState, settokenState ] = useContext(tokenContext)
    const [ commentTab, setcommentTab ] = useState([])


    /* 
    je recupere le post et l'affiche (postObject)
    a chaque changement de likes (useEffect), j'appelle la fonction qui va chercher le post
    
    *

    peut etre avoir une données liked, disliked ou null */

    const primaryFunction = () => {
        getOnePost(id, tokenState)
            .then((response) => {
                console.log(response.data);
                setPostObject(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        primaryFunction()
    }, [dataLikes])

    const requestPostLike = (value) => {
        addNewLike({
            like: value,
            post_id: id
        }, tokenState)
            .then((response) => {
                console.log(response.data);
                setPostObject({
                    ...postObject,
                    likes: response.data.likes,
                    dislikes: response.data.dislikes
                })
            }).catch((err) => {
                console.log(err);
            })

    }

    const handleComment = (e) => {
        e.preventDefault()
        const body = e.target.children[0].value;
        const postId = id;
         addNewComment({
             body: body,
             postId: postId
         }, tokenState)
         .then((res) =>{
             const value = res.data
             console.log(value);
             setcommentTab([
                 ...commentTab,
                 value
             ])
         })
         .catch((err) => {
             console.log(err);
         })
    }

    useEffect(() => {
        console.log(commentTab);
    }, [commentTab])

    const handleLike = () => {
        let likeValue = 0;

        if (dataLikes.likeData !== 1) {
            setDataLikes({
                likeData: 1
            })
            likeValue = 1
        } else {
            setDataLikes({
                likeData: 0
            })
            likeValue = 0
        }
        requestPostLike(likeValue)

    }

    const handleDislike = () => {
        let likeValue = 0;
        if (dataLikes.likeData !== -1) {
            setDataLikes({
                likeData: -1
            })
            likeValue = -1;
        } else {
            setDataLikes({
                likeData: 0
            })
            likeValue = 0
        }
        requestPostLike(likeValue)

    }

    const handleDelete = () => {
        deleteItem(id, tokenState)
    }


    return <div className='content'>
        <Header />

        <div className='container-onePost'>
            <div className='left-side'>
                <div className='container-post'>
                    <h2 className='post-title'>{postObject.title}</h2>
                    <p className='post-body'>{postObject.body}</p>
                </div>
                <button className='delete-post-btn' onClick={handleDelete}>Supprimer</button>
            </div>

            <div className='right-side'>
                <div className='container-likes'>
                    <button className={postObject.isLiked === 1 ? 'likes-active' : 'likes'} onClick={handleLike}><i className="far fa-heart">{postObject.likes}</i></button>
                    <button className='comments'><i className="fas fa-comment-medical">{postObject.nbr_comment}</i></button>
                    <button className={postObject.isLiked === -1 ? 'dislikes-active' : 'dislikes'} onClick={handleDislike}><i className="fas fa-heart-broken">{postObject.dislikes}</i></button>
                </div>
                <div className='container-all-comments'>
                    {postObject.nbr_comment === 0 ? <p>il n'y a aucun commentaires pour le moment !</p> : <p>il y a un commentaire</p>}

                    <form className='new-comment-area' onSubmit={handleComment}>
                    <input  type='text' placeholder='ajouter un commentaire sur ce post' ></input>
                    </form>
                </div>
            </div>

        </div>
    </div>
}

export default OnePost;