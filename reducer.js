import { combineReducers } from 'redux';
import comments from './comments';
import users from './users';

const initialState = {
    comments: [],
    title: 'test'
};



const app = combineReducers({
    comments
});