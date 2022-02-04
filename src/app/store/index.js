import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from '../reducers/index'
import logger from 'redux-logger';
import rootSaga from '../sagas';



const sagaMiddleware = createSagaMiddleware()
const middlewareList = process.env.NODE_ENV === 'development' ?
  [sagaMiddleware, logger] :
  [sagaMiddleware];
const store = createStore(
  reducer,applyMiddleware(...middlewareList)
)

sagaMiddleware.run(rootSaga)
export default store;