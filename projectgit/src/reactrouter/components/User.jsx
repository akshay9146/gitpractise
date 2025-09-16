import { Link } from "react-router-dom"

export default function User(){
    const data=[
        {
            id:1,name:'akshay'
        },
        {
            id:2,name:'abhi'
        },
        { id:3,name:'ashi'}
    ]
    return(
        <>
        {
            data.map((dt)=>{
                return(
                    <div className="flex flex-col">
                    <Link to={/user/+dt.id}>
                            {dt.name}
                        </Link>
                        </div>
                    
                )
            })
        }
        </>
    )
}