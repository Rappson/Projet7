/* 

<i class="fas fa-times-circle"></i>

<i class="fas fa-plus-circle"></i>
*/
import { useState } from "react/cjs/react.development";

function CreateNewPost() {

    const [ Post, setPost ] = useState({
        title: '',
        body: '',
    })

    const [ IsVisible, setIsVisible ] = useState(false);


    const handleChange = (e) => {
        setPost((prevProps) => ({
            ...prevProps,
            [ e.target.name ]: e.target.value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(Post);
    }

    const MakeVisible = () => {
        setIsVisible(prevProps => (!prevProps))
    }

    return (
        <div className="container-form-newPost">
            {/* create nw post */}
            < a id="new-post-link" onClick={MakeVisible} > <i className={IsVisible ? "fas fa-times-circle" : "fas fa-plus-circle"}></i></a >


            {IsVisible &&
                <form className="new-post-form visible" onSubmit={handleSubmit}>
                    <label htmlFor="post-title">Titre</label>
                    <input style={{ width: 285 }} type='text' id="post-title" name="title" onChange={handleChange}></input>

                    <label htmlFor="post-body">Votre message</label>
                    <textarea id="post-body" name='body' onChange={handleChange} cols="35" rows="3"></textarea>
                    <input className="btn-send-new-post" type="submit" value='envoyer' />
                </form>}
        </div>
    )
}



export default CreateNewPost;