import { call, put, takeEvery, takeLatest,take,fork } from 'redux-saga/effects'
import axios from "axios";
import {TODO} from "../actions/actionTypes"
import {success,failure} from "../actions/todo"
// worker Saga: will be fired on USER_FETCH_REQUESTED actions

function callGetRequest(url, data) {
    return axios.get("https://jsonplaceholder.typicode.com/todos/1")
  }


function* watchRequest() {
    while(true){
        const {payload} = yield take(TODO.REQUEST)
        try {
            const user = yield call(callGetRequest);
          yield put(success(user.data));
       } catch (e) {
          yield put(failure(e));
       }
    }
}


export default function* root() {
    yield fork(watchRequest);
  }