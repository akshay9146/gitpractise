const intialState={
    cart:[]
}
const cartReducer=(state=intialState,action)=>{
   switch(action.type){
    case 'ADD':
        const product=action.payload;
        const exist=state.cart.find((dt)=>dt.id===product.id);
        if(exist){
return{
    ...state,
    cart:state.cart.map((dt)=>dt.id===product.id?{...dt,qty:dt.qty+1}:dt)
}
        }else{
            return{
                ...state,
                cart:[...state.cart,{...product,qty:1}]
            }
        }
    case 'REM':
        return{
            ...state,
            cart:state.cart.filter((dt)=>dt.id!=action.payload)

        }
        case 'INC':
            return{
                ...state,
                cart:state.cart.map((dt)=>dt.id===action.payload?{...dt,qty:dt.qty+1}:dt)
            }
            case 'MIN':
                return{
                    ...state,
                     cart:state.cart.map((dt)=>dt.id===action.payload?{...dt,qty:dt.qty-1}:dt).filter((it)=>it.qty>0)
                }

    default:
        return state
       
   }
    
}
export default cartReducer;