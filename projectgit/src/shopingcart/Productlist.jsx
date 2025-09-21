import { useEffect, useState } from "react"
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios';
import { add } from "./cartAction";
export default function ProductList(){
    const [data,setData]=useState([]);
    const dispatch=useDispatch();

    useEffect(()=>{
        axios.get('http://localhost:5000/products').then((dt)=>setData(dt.data))
    },[])
    return(
        <div class="grid grid-cols-4  gap-6">
            {data.map((dt)=>{
                return(
                    <div key={dt.id} className="p-4 rounded shadow">
                         <img src={dt.images} className="h-[250px] rounded-lg"/>
                        <h2>
                            {dt.title}
                        </h2>
                        <p>${dt.price}</p>
                        <button className="bg-cyan-300 rounded-lg shawdow-md" onClick={()=>dispatch(add(dt))}>Add to Cart</button>
                        </div>
                )
            })}
            </div>
    )
}