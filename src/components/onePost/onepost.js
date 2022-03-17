import { useParams } from "react-router-dom";

const OnePost = () => {
    const { id } = useParams();
    return <div>
        <p>{JSON.stringify(id)}</p>
        {/* <p>Coucou</p> */}
    </div>
}

export default OnePost;