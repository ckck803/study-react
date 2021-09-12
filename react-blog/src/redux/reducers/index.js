import { connectRouter } from 'connected-react-router';
import { combineReducers } from "redux";
import authReducer from './authReducer';
import postReducer from './postReducer';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    post: postReducer,
});

export default createRootReducer;