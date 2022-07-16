import { useEffect, useState } from "react";
import '../../style/homepage/post.css';
import CreateNewPost from "./NewPost";
import { getAllPost } from '../services/callAPI';
import { putDate } from '../services/time'
import { useNavigate } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { tokenContext } from "../services/useToken";


function Post() {
    const [ listOfPosts, setListOfPosts ] = useState([]);

    const [tokenState, settokenState] = useContext(tokenContext)


    const navigate = useNavigate ();

    const getPost = () => {
        getAllPost(tokenState)
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
                <section className="container-post " key={key}>
                    <h4 htmlFor='body-post' className="title-post m-2">{value.title}</h4>
                    <div className="username m-2">{value.nom + ' ' + value.prenom}</div>

                    <div className="container-body" onClick={() => handleClick(value.id)}>
                        <div className="body-post m-2" name="body-post"> {value.body}</div>

                        <div className="created-date m-2">{putDate(value.created_at)}</div>
                    </div>

                </section>
            )
        })}

    </article>
}

export default Post;