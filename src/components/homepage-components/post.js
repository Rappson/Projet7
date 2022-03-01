import axios from "axios";
import { urlBase } from "../../url";
import CreateNewPost from "./NewPost";

import { useEffect, useState } from "react";
import '../../style/homepage/post.css'

function Post() {
    const [ listOfPosts, setListOfPosts ] = useState([]);



    const putDate = (initialValue) => {
        let d = new Date(initialValue)

        let DD = d.getDate();
        let MM = d.getMonth() + 1;
        let YYYY = d.getFullYear();
        let hh = d.getHours();
        let mm = d.getMinutes();

        let fullDate = `${DD}-${MM}-${YYYY} ${hh}:${mm}`

        return fullDate
    }

    const updatePost = () => {
        axios.get(urlBase + '/post/getPost', {
            headers: { Authorization: localStorage.getItem('jwtToken') }
        })
            .then((response) => {
                console.log(response.data);
                setListOfPosts(response.data);
            })
    }
    
    useEffect(()=>{
        updatePost()
    }, [])

    const onPostCreated = () => {
        updatePost()
    }

    return <article className="post">

        <CreateNewPost onPostCreated={onPostCreated} />

        {listOfPosts.map((value, key) => {
            return (
                <section className="container-post" key={key}>
                    <h4 htmlFor='body-post' className="title-post">{value.title}</h4>
                    <div className="username">CMwa</div>

                    <div className="container-body">
                        <div className="body-post" name="body-post"> {value.body}</div>

                        <div className="created-date">{putDate(value.created_at)}</div>
                    </div>

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