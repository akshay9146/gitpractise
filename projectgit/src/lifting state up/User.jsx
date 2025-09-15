export default function User({setCount}){
    return(
        <>
        user detail
        <br/>
         <button onClick={()=>setCount(prev=>prev+1)}>increment</button>
        </>
    )
}