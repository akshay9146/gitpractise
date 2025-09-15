import {React,useRef,useState} from 'react';
export default function Toggle(){
    const useref=useRef(null);
    const handleChange=(e)=>{
useref.current.focus();
if(useref.current.style.display!=='none'){
    useref.current.style.display='none';
}
else{
    useref.current.style.display='inline';
}

    }
    return(
        <>
        name:<input type="text" ref={useref} />
        <button type='submit'onClick={handleChange} className='m-1 b-2 bg-gray-100 p-2 w-[100px] font-bold rounded-lg shawdow-lg'>togg</button>
        <br/>
        </>
    )
}