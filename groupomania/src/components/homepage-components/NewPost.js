import { useState, useContext } from "react/cjs/react.development";
import "../../style/homepage/header.css";
import { newPostRequest } from '../services/callAPI';
import { tokenContext } from "../services/useToken";


function CreateNewPost({onPostCreated}) {

    const [tokenState, settokenState] = useContext(tokenContext)


    const [ Post, setPost ] = useState({
        title: '',
        body: ''
    })

    const [ IsVisible, setIsVisible ] = useState(false);

  
    const handleChange = (e) => {
        setPost((prevProps) => ({
            ...prevProps,
            [ e.target.name ]: e.target.value
        }));
    }

    /* SOUMET LA REQUETE D'UN NOUVEAU POST */
    const handleSubmit = (e) => {
        e.preventDefault();
        newPostRequest(Post, tokenState)
        .then((response) => {
            onPostCreated(response.data)
            setIsVisible(prevProps => (!prevProps))
        })
        .catch((error) => console.log(error))
    }

    const MakeVisible = () => {
        setIsVisible(prevProps => (!prevProps))
    }

    return (
        <div className="container-form-newPost">
            {/* create nw post */}
            <button id="new-post-link" onClick={MakeVisible} > Nouvelle  <i className={IsVisible ? "fas fa-times-circle" : "fas fa-plus-circle"}></i> publication</button>


            {IsVisible &&
                <form className="new-post-form visible" onSubmit={handleSubmit}>
                    <label htmlFor="post-title">Titre</label>
                    <input style={{ width: 285 }} type='text' id="post-title" name="title" onChange={handleChange} autoFocus value={Post.title}></input>

                    <label htmlFor="post-body">Votre message</label>
                    <textarea id="post-body" name='body' onChange={handleChange} cols="35" rows="3" value={Post.body}></textarea>
                    <input className="btn-send-new-post" type="submit" value="Envoyer"></input>
                </form>}
        </div>
    )
}



export default CreateNewPost;