import axios from "axios";
import { urlBase } from "../../url";
import CreateNewPost from "./NewPost";

import {useEffect, useState} from "react";
import '../../style/homepage/post.css'

function Post() {
    const [ listOfPosts, setListOfPosts ] = useState([]);

    useEffect(() => {
        /*crontroler le reupload des posts:
        annalyser la taille des posts dans la BDD */
        axios.get(urlBase + '/post/getPost').then((response) => {
            console.log(response.data);
            setListOfPosts(response.data);
        })
    }, [])
    return <article className="post">
        {/* composition d'un post: 
        TITRE
        BODY
        USER
        DATE
        BTN COMMENT
        BTN LIKES
        BTN DISLIKES
         */}
         <CreateNewPost />

         {listOfPosts.map((value, key) => {
             return (
                <section className="container-post">
                <h4 htmlFor='body-post' className="title-post">{value.title}</h4>
                <div className="username">Rappson</div>
    
                <div className="body-post" name="body-post"> {value.body}</div>
    
                <div className="container-btn">
                    <button className="post-likes"><i className="far fa-heart">{value.likes}</i></button>
                    <button className="btn-post-comment"><i className="fas fa-comment-medical">{value.nbr_comment}</i></button>
                    <button className="post-dislikes"><i className="fas fa-heart-broken">{value.dislikes}</i></button>
                </div>
            </section>
             )
         })}
        
    </article>
}

export default Post;