import { React, useState, useContext, useEffect } from 'react'
import {  useParams } from "react-router-dom";
import { getOnePost, addNewLike, deleteItem, getComments } from "../services/callAPI";
import "../../style/homepage/header.css"
import '../../style/onePost.css';
import { tokenContext } from '../services/useToken';
import Comment from './Comment';


const OnePost = () => {
    const { id } = useParams();
    const [ postObject, setPostObject ] = useState({})
    const [ dataLikes, setDataLikes ] = useState({ likeData: 0 })
    const [ tokenState ] = useContext(tokenContext)
    const [ commentTab, setcommentTab ] = useState([])
    const [ btnValue, setBtnValue] = useState('Supprimer')




    /* 
    je recupere le post et l'affiche (postObject)
    a chaque changement de likes (useEffect), j'appelle la fonction qui va chercher le post
    
    *

    peut etre avoir une données liked, disliked ou null */


    useEffect(() => {
        getOnePost(id, tokenState)
            .then((response) => {
                response.data.nbr_comment = commentTab.length
                setPostObject(response.data)
            })
            .catch((error) => {
                console.log(error);
            })

            
        }, [ dataLikes ])

        useEffect(() => {
            getComments(id, tokenState)
            .then((resp) => {
                const value = resp.data
                setcommentTab(value)
            })
            .catch((err) => {
                console.log(err);
            })
        }, [dataLikes])

    const requestPostLike = (value) => {
        addNewLike({
            like: value,
            post_id: id
        }, tokenState)
            .then((response) => {
                setPostObject((prev) => ({
                    ...prev,
                    likes: response.data.likes,
                    dislikes: response.data.dislikes,
                    isLiked: response.data.isLiked
                }))
            }).catch((err) => {
                console.log(err);
            })

    }



    useEffect(() => {
        const countComment = commentTab.length
        setPostObject((prev) => ({
            ...prev,
            nbr_comment: countComment
        }))
    }, [ commentTab ])

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

    const handleDelete = (e) => {
        e.preventDefault()
        if(postObject.isOwned){
            deleteItem(id, tokenState)
        } else {
            setBtnValue('Non ! Tu ne peux pas faire ça ;)')
            window.setTimeout(() => {
                setBtnValue('Supprimer')
            }, 2000)
        }
    }


    return <div className='content'>

        <div className='container-onePost'>
            <div className='left-side'>
                <div className='container-post'>
                    <h2 className='post-title'>{postObject.title}</h2>
                    <p className='post-body'>{postObject.body}</p>
                </div>

                <button className={postObject.isOwned === true ? "delete-post-btn d-inline" : "delete-post-btn d-none"} onClick={handleDelete}>{btnValue}</button>
            </div>

            <div className='right-side'>
                <div className='container-likes'>
                    <button className={postObject.isLiked === 1 ? 'likes-active' : 'likes'} onClick={handleLike}><i className="far fa-heart">{postObject.likes}</i></button>
                    <a href="#input-comment" className='comments btn btn-secondary'><i className="fas fa-comment-medical" href=".new-comment-area">{postObject.nbr_comment}</i></a>
                    <button className={postObject.isLiked === -1 ? 'dislikes-active' : 'dislikes'} onClick={handleDislike}><i className="fas fa-heart-broken">{postObject.dislikes}</i></button>
                </div>
                <Comment commentTab={commentTab} setcommentTab={setcommentTab} postObject={postObject} />
            </div>

        </div>
    </div>
}

export default OnePost;