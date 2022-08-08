import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { tokenContext } from '../services/useToken';
import { updatePost } from "../services/callAPI";

const UpdatePostBtn = ({ submitUpdate, postObject, setPostObject }) => {
    const { id } = useParams();
    const [ title, setTitle ] = useState(postObject.title)
    const [ body, setBody ] = useState(postObject.body)

    const [ tokenState ] = useContext(tokenContext)

    const navigate = useNavigate();



    /* A VERIFIER
    
    POUR EVITER L ERREUR DES LE CHARGEMENT DE LA PAGE JE PEUX:
    - METTRE LE STATE A "NULL" (TITLE, BODY)
    - FAIRE UN USE EFFECT POUR SET LES STATES (TITLE, BODY) 
    - RAJOUTER UNE CONDITION POUR EVITER LES BOUCLES 
    
                        -------------
    
    FAIRE UN BOUTTON TEMPORAIRE POUR LA VALIDATION DU SUBMIT
    COMMENT FAIRE UNE CONDITION TERNAIRE */

    useEffect(() => {
        if (title === undefined || body === undefined) {
            setTitle(postObject.title)
            setBody(postObject.body)
        }

    }, [ postObject ])

    const handleTitle = (e) => {
        e.preventDefault()
        const target = e.target.value
        setTitle(target)
        console.log(title);
    }

    const handleBody = (e) => {
        e.preventDefault()
        const target = e.target.value
        setBody(target)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const modifiedContent = {
            title: title,
            body: body
        }
        updatePost(id, modifiedContent, tokenState)
            .then((res) => {
                submitUpdate(title, body)
                navigate(`/post/${id}`)
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return <div className="container">
        <button type="button" className={postObject.isOwned === true || postObject.admin === true ? "btn btn-warning d-inline" : "btn btn-warning d-none"} data-toggle="modal" data-target="#exampleModalCenter">
            Modifier
        </button>


        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">{postObject.title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <form className="modal-container d-flex flex-column justify-content-center" onSubmit={handleSubmit}>

                        <div className='modal-body d-flex flex-column' id='update-title'>
                            <label className="m-2 font-weight-bold" htmlFor="title">Titre</label>
                            <input type='text' name="title" onChange={handleTitle} value={title}></input>
                        </div>

                        <div className="modal-body d-flex flex-column" id='update-body'>
                            <label className="m-2 font-weight-bold" htmlFor="body">texte</label>
                            <input type="text" name='body' onChange={handleBody} value={body}></input>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            {/* PAS BESOIN DE METTRE 2 FOIS ONCLICK */}
                            <button type="submit" className="btn btn-warning">Save changes</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
}

export default UpdatePostBtn;