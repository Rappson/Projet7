import { React, useState } from 'react'
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOnePost } from "../services/callAPI";
import '../../style/onePost.css';


const OnePost = () => {
    const { id } = useParams();
    const [ postObject, setPostObject ] = useState({})

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

    return <div className='container-onePost'>
        <div className='left-side'>
            <div className='container-post'>
                <h2 className='post-title'>{postObject.title}</h2>
                <p className='post-body'>{postObject.body}</p>
            </div>
        </div>

        <div className='right-side'>
        <div className='container-likes'>
            <button className='likes'><i className="far fa-heart">{postObject.likes}</i></button>
            <button className='comments'><i className="fas fa-comment-medical">{postObject.nbr_comment}</i></button>
            <button className='dislikes'><i className="fas fa-heart-broken">{postObject.dislikes}</i></button>
        </div>
        <div className='container-all-comments'>
            <p>il n'y a aucun commentaires pour le moment !</p>
        </div>
        </div>
        
    </div>
}

export default OnePost;