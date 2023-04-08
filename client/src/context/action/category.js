

import {
    SUCCESS_GET_DATA,
    ADD_GET_DATA,

} from './actionType'

export const getCategory = (data) => {
    return {
        type    : SUCCESS_GET_DATA,
        payload : data
        
    }
}

export const addCategory = (data) => {
    return {
        type    : ADD_GET_DATA,
        payload : data
    }
}


