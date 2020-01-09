import {combineReducers} from 'redux';
import lists from './lists';
import isdisplay from './isDisplay';

const myReducer = combineReducers({
    lists,
    isdisplay
})

export default myReducer;