import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux"; // Allows you the ability to create the global state (store), Middleware allows for succesfull api call.
import { Provider } from "react-redux"; // Provider will be wrapped around App, gives our project access to the global store.
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"; // this is to be used in our google chrome devops Tools
import rootReducer from "./reducers";
import postsReducer from "./reducers/postsReducers";

//Redux thunk : Async middleware for Redux

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
// we are using an enhancer to enhance with 3rd party abilities
//thunk: a middleware that allows us to make asynchronous actions in Redux
//The reason we need it is because asynchronous code can't be passed to reducers or the dispatch method so we use thunk to perform async side effects before calling dispatch

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
