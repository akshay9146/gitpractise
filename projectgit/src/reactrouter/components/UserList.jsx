import { useParams,Link } from "react-router-dom"

export default function UserList(){
    const dt=useParams();
    return(
    <>
    User -{dt.id}
    <br/>
        <Link to="/user">Back To List</Link>
    </>
    )
}