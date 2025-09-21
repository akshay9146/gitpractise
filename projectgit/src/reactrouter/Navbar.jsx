import {Link} from 'react-router-dom'
export default function Navbar({cartCount}){
    return(
        <div className='flex justify-between bg-gray-300'>
            <div className='m-2'>
                <Link to="/">Mobiles</Link> 
            </div>
            <div className='m-2'>
                 <h1>🛍️ Simple Shopping Cart</h1>
            </div>
            <div className='m-2 p-2 flex gap-1'>
                <Link to="/">Products</Link>
                <Link to="/cart">Cart {cartCount}</Link>
                {/* <Link to="/login">Login</Link>
                <Link to="/college">College</Link>
                 <Link to="/user">User</Link> */}
                
            </div>
        </div>
    )
}