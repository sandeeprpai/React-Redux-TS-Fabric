import { createStore } from "redux";

import rootReducer from '../redux/reducers/index';

import posts from '../data/posts'

const initialState: any = {
    posts
};

debugger;

const store = createStore(
    rootReducer, initialState
);

debugger;


export default store; 