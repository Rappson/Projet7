import axios from "axios";
import { useState } from "react/cjs/react.development";
import { urlBase } from "../../url";
import "../../style/homepage/header.css"


function CreateNewPost() {

    const [ Post, setPost ] = useState({
        title: '',
        body: '',
        token: localStorage.getItem('jwtToken')
    })

    const [ IsVisible, setIsVisible ] = useState(false);


    const handleChange = (e) => {
        setPost((prevProps) => ({
            ...prevProps,
            [ e.target.name ]: e.target.value
        }));
    }

    const handleSubmit = (e) => {
        console.log(Post);
        e.preventDefault();
        axios.post(urlBase + '/post/newPost', Post)
    }

    const MakeVisible = () => {
        setIsVisible(prevProps => (!prevProps))
    }

    return (
        <div className="container-form-newPost">
            {/* create nw post */}
            <a id="new-post-link" onClick={MakeVisible} > <i className={IsVisible ? "fas fa-times-circle" : "fas fa-plus-circle"}></i></a >


            {IsVisible &&
                <form className="new-post-form visible" onSubmit={handleSubmit}>
                    <label htmlFor="post-title">Titre</label>
                    <input style={{ width: 285 }} type='text' id="post-title" name="title" onChange={handleChange} value={Post.title}></input>

                    <label htmlFor="post-body">Votre message</label>
                    <textarea id="post-body" name='body' onChange={handleChange} cols="35" rows="3" value={Post.body}></textarea>
                    <input className="btn-send-new-post" type="submit" value="Envoyer"></input>
                </form>}
        </div>
    )
}



export default CreateNewPost;