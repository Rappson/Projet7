import { React, useContext, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { tokenContext } from '../services/useToken';
import { putDate } from "../services/time";
import { addNewComment, deleteComment } from "../services/callAPI";

const Comment = ({ commentTab, setcommentTab, postObject }) => {
    const { id } = useParams();
    const [ tokenState, settokenState ] = useContext(tokenContext)


    const handleComment = (e) => {
        e.preventDefault()
        console.log(commentTab);
        const body = e.target.children[ 0 ].value;
        const postId = id;
        addNewComment({
            body: body,
            postId: postId
        }, tokenState)
            .then((res) => {
                const value = res.data
                setcommentTab(value)
            })
            .catch((err) => {
                console.log(err);
            })
    }

/* il faut inserer l'ID dans le nouveau commentaire afin de pouvoir le supprimer sans actualiser */

    const handleDeleteComment = (e) => {
        e.preventDefault()
        const positionCommentInArray = e.target.id
        console.log(e.target);
        const commentId = commentTab[ positionCommentInArray ].id
        deleteComment(commentId, tokenState)
            .then((response) => {
                const newCommentTab = commentTab
                console.log(newCommentTab);
                // faut supprimer l'élément du tableau puis reset le tableau
                newCommentTab.splice(positionCommentInArray, 1)
                setcommentTab(newCommentTab)
                console.log(newCommentTab);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (<div className='container-all-comments'>
        {commentTab.length === 0 ? <p>il n'y a aucun commentaires pour le moment !</p> : <div className='comment'>
            {commentTab.map((value, i) => {
                return (
                    <section className='one_comment' key={i}>
                        <div className='d-flex d-column justify-content-between pt-2' id='topside'>
                            <p className='username'>{value.prenom + ' ' + value.nom}</p>
                            <button className={commentTab[i].isOwned === true ? 'btn btn-primary' : 'btn btn-primary d-none'} id={i} onClick={handleDeleteComment}><i className="fa fa-trash" id={i}></i></button>
                        </div>
                        <p className='body'>{value.body}</p>
                        <p className='created-date'>{putDate(value.created_at)}</p>
                    </section>
                )
            })}
        </div>}

        <form className='new-comment-area' onSubmit={handleComment}>
            <input id='input-comment' autoFocus type='text' placeholder='Ajouter un commentaire sur ce post'></input>
        </form>
    </div>)
}

export default Comment;