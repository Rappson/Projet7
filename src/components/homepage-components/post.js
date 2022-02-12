import axios from "axios";
import { urlBase } from "../../url";
import {useEffect, useState} from "react";
import '../../style/homepage/post.css'

function Post() {
    const [ listOfPosts, setListOfPosts ] = useState([]);

    useEffect(() => {
        axios.get(urlBase + '/post/getPost').then((response) => {
            setListOfPosts(response.data[0]);
        })
    })
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
         {listOfPosts.map((value, key) => {
             return (
                <section className="container-post">
                <h4 htmlFor='body-post' className="title-post">{value.title}</h4>
    
                <div className="body-post" name="body-post"> {value.body}</div>
    
                <div className="container-btn">
                    <button className="post-likes"><i className="far fa-heart">{value.likes}</i></button>
                    <button className="btn-post-comment"><i className="fas fa-comment-medical">{value.comment}</i></button>
                    <button className="post-dislikes"><i className="fas fa-heart-broken">{value.dislikes}</i></button>
                </div>
            </section>
             )
         })}
        
    </article>
}

export default Post;