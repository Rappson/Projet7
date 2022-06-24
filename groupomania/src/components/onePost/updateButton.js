import { useState } from "react";

const updatePostBtn = ({postObject, setPostObject}) => {


    return <div className="container">
        <button type="button" className={postObject.isOwned === true ? "btn btn-warning d-inline" : "btn btn-warning d-none"} data-toggle="modal" data-target="#exampleModalCenter">
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
                    <div className='modal-body' id='update-title'>
                        <label htmlFor="title">Titre</label>
                        <input type='text' name="title" autoFocus value=""></input>
                    </div>
                    <div className="modal-body" id='update-body'>
                        ...
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default updatePostBtn;