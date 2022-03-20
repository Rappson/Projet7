import { useParams } from "react-router-dom";
import { React } from 'react'
import { getOnePost } from "../services/callAPI";

const OnePost = () => {
    const { id } = useParams();

    getOnePost(id)

    return <div>
        <p>{id}</p>
        {/* <p>Coucou</p> */}
    </div>
}

export default OnePost;