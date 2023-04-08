
import {combineReducers} from 'redux'
import { category } from './categoryReducer'


const rootReducer = combineReducers({
    category : category
})

export default rootReducer