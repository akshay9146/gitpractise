// import Card from './Card'
// import ObjectState from './ObjectState'
// import Toggle from './uncontrolledComponents/Toggle'

import { useState } from "react"
import User from "./lifting state up/User";
import Child from "./lifting state up/Child";
import ObjectState from "./updating object and array/ObjectState";
import Form from "./forms/Form";

function App() {
  const [count,setCount]=useState(0);
  return (
    <>
    <Child count={count}/>
<br/>
    <User setCount={setCount}/><br/>
    <Form/>
    
   {/* <h2 className="text-sm text-center font-light text-red-200 bg-pink-600 p-4 mx-160">hello react 1</h2>
   <div className='flex flex-col-reverse justify-start items-center grow'>
    <h2 className="text-xl font-bold text-blue-500 bg-pink-100">hello react 2</h2>
      <h2 className="text-xl text-green-300 bg-pink-100">hello react 3</h2>
    </div>
   
      <h2 className="text-[100px] shadow-md rounded-lg hover:bg-blue-200">hello react 4</h2>

      <br/> */}
      <hr/>
      {/* <Card/> */}
 <ObjectState/>
{/* <Toggle/> */}
    </>
  )
}

export default App
