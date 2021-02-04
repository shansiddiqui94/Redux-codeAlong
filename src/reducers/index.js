import { combineReducers } from "redux"; // feature of Redux combines Reducers

import postsReducers from "./postsReducers";
//store can only take ONE reducer
const rootReducer = combineReducers({
  posts: postsReducer, // assigning postsReducers to posts
});

export default rootReducer;
