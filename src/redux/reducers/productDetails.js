
export const productsDetailReducer= (state= {product: {}},action)=>{
    switch (action.type) {
        case "GET_DETAİLS":
return{
    ...state,
    product:action.payload
}
            
        
    
        default:
           return state;
    }
 }