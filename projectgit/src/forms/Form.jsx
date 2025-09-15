import { useState } from "react"

export default function Form(){
    const [data,formData]=useState({
        name:'',
        gender:'',
        cricket:false,
        football:false
    })
    const [submitData,submitformData]=useState(null);
    const handleChange=(e)=>{
const {name,value,checked,type}=e.target;
formData((prev)=>({
    ...prev,
    [name]:type==='checkbox'?checked:value
}))
    }
    const handSubmit=(e)=>{
        e.preventDefault();
        submitformData(data);
    }
    return(
        <>
        <form onSubmit={handSubmit}>
        name:<input type="text" name="name" value={data.name} onChange={handleChange}/><br/>
        gender:<br/>
        male:<input type="radio" name="gender" value="male" checked={data.gender==='male'} onChange={handleChange}/>
        female:<input type="radio" name="gender" value="female" checked={data.gender==='female'} onChange={handleChange}/>
        <br/>
        cricket:<input type="checkbox" name="cricket" checked={data.cricket} onChange={handleChange}/>
        football:<input type="checkbox" name="football" checked={data.football} onChange={handleChange}/>
        <br/>
         <button type="submit">submit</button>
         </form>
         <hr/>
         <h4>Data</h4>

         {submitData&&(
            
               
                    <ul >
                        <li>{submitData.name}</li><li>{submitData.gender}</li><li>{[submitData.cricket && 'cricket',submitData.football && 'football']
                            .filter(Boolean).join(',')||'None'}</li>
                        </ul>)
              
         }
        </>
    )
}