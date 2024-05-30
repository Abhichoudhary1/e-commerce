export const addcart = (product)=>{
    return{
        type:"ADDITEM",
        payload:product
    }
}
export const delcart = (product)=>{
    return{
        type:"DELITEM",
        payload:product
    }
}