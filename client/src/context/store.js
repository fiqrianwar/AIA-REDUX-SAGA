import rootReducer from "./reducer/rootReducers"
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas/rootSagas";


const sagaMiddleware = createSagaMiddleware()

const configureStore = compose(applyMiddleware(sagaMiddleware))(createStore)(
    rootReducer
)

sagaMiddleware.run(rootSaga)

export default configureStore