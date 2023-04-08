import { all } from 'redux-saga/effects';
import categorySaga   from './categorySagas'

export default function* rootSaga() {
    yield all(
                [
                    categorySaga()
                  
                ]
            )
}