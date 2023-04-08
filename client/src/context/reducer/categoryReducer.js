const initialState = {
    loading : false,
    data : []
}


export const category = (state = initialState, action) => {
    switch (action.type) {

        case 'SUCCESS_GET_DATA' : 
            return {
                ...state,
                loading : true,
                data    : action.payload
            }
        case 'ADD_GET_DATA' : 
            return {
                ...state,
                data    : [
                    ...state.data,
                    action.payload
                ]
                
            }   
    
        default:
            return state;
    }
}