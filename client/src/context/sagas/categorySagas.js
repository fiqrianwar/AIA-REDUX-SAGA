import { call, put, takeEvery }     from 'redux-saga/effects';
import {    
            addData, 
            getAllCategory,
            getSpecificCategories,
            updateCategories,
            deleteApi
        
        }  from './API/apiCategory'

function* fetchCategories() {

    try {

        const categories = yield call(getAllCategory, '/category')
        // console.log(categories);
        yield put({
            type    : 'SUCCESS_GET_DATA',
            payload : categories 
        })
        
    } catch (error) {
        console.log(error);
    }
}


function* addCategories(action) {
    console.log(action);
    try {
        const addCategories = yield call(addData, '/category/create', action.payload)
        // console.log(addCategories);

        yield put(
            {
                type        : 'ADD_GET_DATA',
                payload     :  addCategories
            }
        )
        
    } catch (error) {
        console.log(error);
    }

    
}

function* getCategories(action){
    try {
        const getData = yield call(getSpecificCategories, action.payload);
        console.log(getData);
    } catch (error) {
        console.log(error);
    }
}


function* categoriesUpdate(action){
    try {
        const updateData = 
        yield call(
                    updateCategories, 
                    '/category/update',
                    action.payload.id, 
                    action.payload.name
                    );
        
        console.log(updateData);
    } catch (error) {
        console.log(error);
    }
}


function* categoriesDelete(action){
    try {
        const deleteCategories = 
        yield call(
                    deleteApi, 
                    action.payload, 
                    );
        
        const categories = yield call(getAllCategory, '/category')

        yield put({
            type    : 'SUCCESS_GET_DATA',
            payload : categories
        })

        console.log(deleteCategories);
    } catch (error) {
        console.log(error);
    }
}



function* categorySaga() {
    yield takeEvery('FETCHING_DATA', fetchCategories)
    yield takeEvery('ADD_FETCHING_DATA', addCategories)
    yield takeEvery('GET_SPECIFIC_CATEGORIES', getCategories)
    yield takeEvery('UPDATE_CATEGORIES', categoriesUpdate)
    yield takeEvery('DELETE_CATEGORIES', categoriesDelete)
}

export default categorySaga