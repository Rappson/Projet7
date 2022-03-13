import { useEffect, useState } from "react";
import '../../style/homepage/post.css';
import CreateNewPost from "./NewPost";
import { getAllPost } from '../services/callAPI';
import { putDate } from '../services/time'
import { useNavigate } from "react-router-dom";

function Post() {
    const [ listOfPosts, setListOfPosts ] = useState([]);

    const navigate = useNavigate ();

    const getPost = () => {
        getAllPost()
            .then((response) => {
                setListOfPosts(response.data);
            })
    }

    useEffect(() => {
        getPost()
    }, [])


    let tabNewPost = []

    const onPostCreated = (newData) => {
        tabNewPost.push(newData, ...listOfPosts)
        setListOfPosts(tabNewPost)
    }

    const handleClick = (id) => {
       navigate(`/post/${id}`)
    } 


    return <article className="post">

        <CreateNewPost onPostCreated={onPostCreated} />

        {listOfPosts.map((value, key) => {
            return (
                <section className="container-post" key={key}>
                    <h4 htmlFor='body-post' className="title-post">{value.title}</h4>
                    <div className="username">{value.nom + value.prenom}</div>

                    <div className="container-body" onClick={() => handleClick(value.id)}>
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