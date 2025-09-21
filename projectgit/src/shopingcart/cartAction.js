export const add=(product)=>{
    return{
        type:'ADD',
        payload:product
    }
}
export const remove=(id)=>{
    return{
        type:'REM',
        payload:id
    }
}
export const inc=(id)=>{
    return{
        type:'INC',
        payload:id
    }
}
export const min=(id)=>{
    return{
        type:'MIN',
        payload:id
    }
}