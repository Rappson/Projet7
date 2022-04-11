import { React, useState } from 'react'
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOnePost, addNewLike, deleteItem } from "../services/callAPI";
import "../../style/homepage/header.css"
import '../../style/onePost.css';
import Header from "../homepage-components/Header";


const OnePost = () => {
    const { id } = useParams();
    const [ postObject, setPostObject ] = useState({})
    const [ dataLikes , setDataLikes ] = useState({ likeData: 0 })

    useEffect(() => {
        getOnePost(id)
            .then((response) => {
                console.log(response.data);
                setPostObject(response.data)
                setDataLikes({likeData: response.data.isLiked})
                console.log(dataLikes);
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
        if(dataLikes.likeData !== 1){
            setDataLikes({
                likeData: 1
            })
            requestPostLike()
        }else{
            setDataLikes({
                likeData: 0
            })
            requestPostLike()
        }
    }

    const handleDislike = () => {
        if(dataLikes.likeData !== -1){
            setDataLikes({
                likeData: -1
            })
            requestPostLike()
        }else{
            setDataLikes({
                likeData: 0
            })
        }
        requestPostLike()
    }

    const handleDelete = () => {
        deleteItem(id)
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
                    <button className={dataLikes.likeData === 1 ? 'likes-active' : 'likes'} onClick={handleLike}><i className="far fa-heart">{postObject.likes}</i></button>
                    <button className='comments'><i className="fas fa-comment-medical">{postObject.nbr_comment}</i></button>
                    <button className={dataLikes.likeData === -1 ? 'dislikes-active' : 'dislikes'} onClick={handleDislike}><i className="fas fa-heart-broken">{postObject.dislikes}</i></button>
                </div>
                <div className='container-all-comments'>
                    <p>il n'y a aucun commentaires pour le moment !</p>
                </div>
            </div>

        </div>
    </div>
}

export default OnePost;