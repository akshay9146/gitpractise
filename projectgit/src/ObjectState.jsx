import { useState } from "react"

const ObjectState=()=>{
    const [count,setCount]=useState({
        id:1,name:'ask'
    })
    const chng=()=>{
        setCount((prev)=>({
            id:prev.id,
            name:'abhi'
        }))
    }
    return(
        <>
        {count.id} {count.name}<br/>
        <button onClick={chng}>chnage</button>
        </>
    )
}
export default ObjectState;