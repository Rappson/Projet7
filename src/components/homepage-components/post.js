function Post() {
    const postContent = (title, body, comment, like, dislike) => {
        return (
            <section className="container-post">
                <label for="body-post" className="title-post">{title}</label>
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
            <label htmlFor='body-post' className="title-post">TEST D'UN POST</label>

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