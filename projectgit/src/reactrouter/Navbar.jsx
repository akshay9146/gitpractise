import {Link} from 'react-router-dom'
export default function Navbar(){
    return(
        <div className='flex justify-between bg-gray-300'>
            <div className='m-2'>
                <Link to="/">Logo</Link>
            </div>
            <div className='m-2 p-2 flex gap-1'>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/college">College</Link>
                 <Link to="/user">User</Link>
                
            </div>
        </div>
    )
}