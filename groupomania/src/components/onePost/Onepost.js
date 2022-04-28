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
    const [ dataLikes, setDataLikes ] = useState({ likeData: 0 })

    /* isLiked = si l'user a deja like ou pas:

    faut remettre a 0 lorsque l'user clique sur le bouton
    et ajoutez 1 ou enlevez 1 en fonction de la requete */

    useEffect(() => {
        getOnePost(id)
            .then((response) => {
                console.log(response.data);
                setPostObject(response.data)
                setDataLikes({ likeData: response.data.isLiked })
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
        if (dataLikes.likeData !== 1) {
            setDataLikes({
                likeData: 1
            })
            postObject.likes = postObject.likes + 1
        } else {
            setDataLikes({
                likeData: 0
            })
            postObject.likes = postObject.likes - 1
        }
    }

    const handleDislike = () => {
        if (dataLikes.likeData !== -1) {
            setDataLikes({
                likeData: -1
            })
            postObject.dislikes = postObject.dislikes + 1
        } else {
            setDataLikes({
                likeData: 0
            })
            postObject.dislikes = postObject.dislikes - 1
        }
    }

    useEffect(() => {
        requestPostLike()
    }, [ dataLikes ])

    const handleDelete = () => {
        deleteItem(id)
    }

    const countLikes = (requestValue) => {
        /* le but de la fonction:
        AJOUTER LE LIKE SANS RAPPELER LA REQUETE.
        probleme rencontré:
        LE LIKE S'AJOUTE SANS SUPPRIMER LE DISLIKE CE QUI REND POSSIBLE POUR L'USER D'AJOUTER INDEFINIMENT DES LIKES ET DES DISLIKES  */

        /* SOLUTION:
        -VERIFIER QUE USER NE DEPASSE LE NBR DE LIKE INITIAL 
        -FAIRE UN USESTATE "ISLIKED"
        -FAIRE UN IF DANS UN IF*/

        /* je dois verifier si: 
       -l'user a deja like ou pas 
       -l'action demandée  par l'user
       */

        if (requestValue === 1) {
            /* si la requete est un like */
            postObject.dislikes = postObject.dislikes + 1
        } else if (requestValue === -1) {
            /* si la requete est un dislikes */
            postObject.dislikes = postObject.dislikes - 1
        } else {
            /* si c'est une annulation de like */
        }

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
                    <p>il n'y a aucun commentaires pour le moment !</p>
                </div>
            </div>

        </div>
    </div>
}

export default OnePost;