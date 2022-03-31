import { React, useState } from 'react'
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOnePost, addNewLike } from "../services/callAPI";
import "../../style/homepage/header.css"
import '../../style/onePost.css';
import Header from "../homepage-components/Header";


const OnePost = () => {
    const { id } = useParams();
    const [ postObject, setPostObject ] = useState({})
    const [ dataLikes , setDataLikes ] = useState({
        likeData: 0,
        like: false,
        dislike: false
    })
    // const postId = postObject.id;

    useEffect(() => {
        getOnePost(id)
            .then((response) => {
                console.log(response.data);
                setPostObject(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    const requestPostLike = () => {
        addNewLike({
            like: dataLikes.likeData,
            post_id: id
        })
    }

    const handleLike = () => {
        if(dataLikes !== 1){
            setDataLikes({
                likeData: 1,
                like: true,
                dislike: false
            })
            requestPostLike()
        }else{
            setDataLikes({
                likeData: 0,
                like: false,
                dislike: false
            })
            requestPostLike()
        }
    }

    const handleDislike = () => {
        if(dataLikes !== -1){
            setDataLikes({
                likeData: -1,
                like: false,
                dislike: true
            })
            requestPostLike()
        }else{
            setDataLikes({
                likeData: 0,
                like: false,
                dislike: false
            })
        }
        requestPostLike()
    }
    

    return <div className='content'>
        <Header />
        
        <div className='container-onePost'>
            <div className='left-side'>
                <div className='container-post'>
                    <h2 className='post-title'>{postObject.title}</h2>
                    <p className='post-body'>{postObject.body}</p>
                </div>
                <button className='delete-post-btn'>Supprimer</button>
            </div>

            <div className='right-side'>
                <div className='container-likes'>
                    <button className={dataLikes.like ? 'likes-active' : 'likes'} onClick={handleLike}><i className="far fa-heart">{postObject.likes}</i></button>
                    <button className='comments'><i className="fas fa-comment-medical">{postObject.nbr_comment}</i></button>
                    <button className={dataLikes.dislike ? 'dislikes-active' : 'dislikes'} onClick={handleDislike}><i className="fas fa-heart-broken">{postObject.dislikes}</i></button>
                </div>
                <div className='container-all-comments'>
                    <p>il n'y a aucun commentaires pour le moment !</p>
                </div>
            </div>

        </div>
    </div>
}

export default OnePost;