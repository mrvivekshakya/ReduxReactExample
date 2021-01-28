import { combineReducers } from "redux";
import userReducer from './user';
import counterReducer from './counter';
import changeUserReducer from './changeUser';

const allReducer = combineReducers({
    userReducer,
    counterReducer,
    changeUserReducer
});

export default allReducer;