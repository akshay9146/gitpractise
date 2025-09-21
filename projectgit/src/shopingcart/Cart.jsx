import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {Link} from 'react-router-dom'
import { inc, min, remove } from "./cartAction";
const Cart = () => {
    const cart=useSelector((state)=>state.cart);
    console.log(cart,"cartt")
  const dispatch = useDispatch();

  const total = cart.cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="p-4 border-l h-screen">
      <h2 className="text-lg font-bold mb-4"><h2>🛒 Your Cart</h2></h2>
      {cart.cart.length===0?(
        <p>Your cart is empty .. <Link to="/">go to purchase</Link></p>
      ):(
        cart.cart.map((dt)=>{
            return(
                                <div key={dt.id} className="p-4 rounded shadow">
                                     <img src={dt.images} className="h-[250px] rounded-lg"/>
                                    <h2>
                                        {dt.title} {dt.qty}
                                    </h2>
                                    <p>${dt.price} x {dt.qty} =${dt.price * dt.qty}</p>
                                    <button className="text-red-400 font-extrabold font-black rounded-lg shawdow-md m-1" onClick={()=>dispatch(inc(dt.id))}><h1>+</h1></button>
                                   <button className="text-red-400 font-extrabold font-black rounded-lg shawdow-md m-1" onClick={()=>dispatch(min(dt.id))}><h1>-</h1></button>
                                    <button className="rounded-lg shawdow-md" onClick={()=>dispatch(remove(dt.id))}>❌</button>
                                   
                                    </div>

                                    
                            )
        }
      ))}
      {cart.cart.length > 0 && (
        <div className="flex flex-row gap-4 mt-4 border-t pt-2 text-right font-bold">
          Total: ${total}
          <Link to="/Checkout">Checkout</Link>
                                   
        </div>
      )}

    
      


      
      

      
    </div>
  );
};

export default Cart;
