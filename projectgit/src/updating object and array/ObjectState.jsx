import { useState } from "react"

const ObjectState=()=>{
    const [count,setCount]=useState({
        id:1,name:'ask',address:{
            city:'mumbai'
        }
    })
    const chng=()=>{
       setCount((prev)=>({
        ...prev,
        name:'rohit',
        address:{
            ...prev.address,
            city:'nagpur'
        }
    }))
    }
    return(
        <>
        {count.id} {count.name} {count.address.city}<br/>
        <button onClick={chng}>chnage</button>
        </>
    )
}
export default ObjectState;