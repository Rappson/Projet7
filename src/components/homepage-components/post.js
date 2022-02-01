import axios from "axios";
import { urlBase } from "../../url";

function Post() {
    const PostContent = (title, body, comment, like, dislike) => {
        const list = axios.get(urlBase + '/post/getPost')
        console.log(list);
        return (
            <section className="container-post">
                <h4 for="body-post" className="title-post">{title}</h4>
                <input type='text' name='body-post' className="body-post">
                    {body}
                </input>
                <div className="container-btn">
                    <button className="btn-post-comment"><i className="fas fa-comment-medical"></i></button>
                    <button className="post-likes">{like} <i className="far fa-heart"></i></button>
                    <button className="post-dislikes">{dislike} <i className="fas fa-heart-broken"></i></button>
                </div>
            </section>
        )
    };
    return <article className="post">
        {/* <PostContent /> */}


        {/* composition d'un post: 
        TITRE
        BODY
        USER
        DATE
        BTN COMMENT
        BTN LIKES
        BTN DISLIKES
         */}
        <section className="container-post">
            <h4 htmlFor='body-post' className="title-post">TEST D'UN POST</h4>

            <div className="body-post" name="body-post"> coucou !</div>

            <div className="container-btn">
                <button className="post-likes"><i className="far fa-heart"></i></button>
                <button className="btn-post-comment"><i className="fas fa-comment-medical"></i></button>
                <button className="post-dislikes"><i className="fas fa-heart-broken"></i></button>
            </div>
        </section>
    </article>
}

export default Post;