import axios from "axios";
import { urlBase } from "../../url";
import '../../style/homepage/post.css'

function Post() {
    const PostContent = () => {
        axios.get(urlBase + '/post/getPost')
        .then((response) => {
            let listOfPost = JSON.parse(response.request.response)[0];

            const component = listOfPost.map((item) => {
                 return (<section className="container-post">
                        <h4 for="body-post" className="title-post">{item.title}</h4>
                        <input type='text' name='body-post' className="body-post">
                            {item.body}
                        </input>
                        <div className="container-btn">
                            <button className="btn-post-comment"><i className="fas fa-comment-medical"></i></button>
                            <button className="post-likes">{item.like} <i className="far fa-heart"></i></button>
                            <button className="post-dislikes">{item.dislike} <i className="fas fa-heart-broken"></i></button>
                        </div>
                    </section>)
            })
            console.log(component);
            return component
        })
        .catch((error) => console.log(error))
/*         return (
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
 */    };
 PostContent();
    return <article className="post">
      <PostContent />


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