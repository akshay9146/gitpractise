import {Link, Outlet} from 'react-router-dom'
export default function College(){
    return(
    <>
    <div>
    College
    <br/>
    <div className='flex gap-3'>
    <Link to="student">Student</Link>
                <Link to="">Department</Link>
                </div>
                <hr/>

    </div>

    <Outlet/>
    <br/>
        <Link to="/">Back To Home</Link>
    </>
    )
}