import axios from 'axios';
import dotenv from 'dotenv';
import { all, fork } from 'redux-saga/effects';
import authSaga from "./authSaga";
import postSaga from './postSaga';


dotenv.config()

axios.defaults.baseURL = process.env.REACT_APP_BASIC_SERVER_URL

export default function* rootSaga() {
    yield all([
        fork(authSaga),
        fork(postSaga)
    ]);
}