import { React, useContext } from 'react'
import { useParams } from "react-router-dom";
import { tokenContext } from '../services/useToken';
import { putDate } from "../services/time";
import { addNewComment, deleteComment } from "../services/callAPI";

const Comment = ({ commentTab, setcommentTab }) => {
    const { id } = useParams();
    const [ tokenState, settokenState ] = useContext(tokenContext)


    const handleComment = (e) => {
        e.preventDefault()
        const body = e.target.children[ 0 ].value;
        const postId = id;
        addNewComment({
            body: body,
            postId: postId
        }, tokenState)
            .then((res) => {
                const value = res.data
                console.log(value);
                setcommentTab(value)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handleDeleteComment = (e) => {
        e.preventDefault()
        const positionCommentInArray = e.target.id
        const commentId = commentTab[ positionCommentInArray ].id
        deleteComment(commentId, tokenState)
            .then((response) => {

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
                            <button className='btn btn-primary' id={i} onClick={handleDeleteComment}><i className="fa fa-trash"></i></button>
                        </div>
                        <p className='body'>{value.body}</p>
                        <p className='created-date'>{putDate(value.created_at)}</p>
                    </section>
                )
            })}
        </div>}

        <form className='new-comment-area' onSubmit={handleComment}>
            <input id='input-comment' type='text' placeholder='ajouter un commentaire sur ce post'></input>
        </form>
    </div>)
}

export default Comment;