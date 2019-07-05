// This module creates a redux store
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

//Gets the root reducer from the below module to create the store
import rootReducer from "./reducers";

//Initial state is initialized as an empty object
const initialState = {};

const middleware = [thunk];

const composeEnhancers =
  typeof window === "object" && window.__Redux_Devtools_Extension_Compose__
    ? window.__Redux_Devtools_Extension_Compose__({
        //Specify extensions options like name, actionsBlackList, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware) //other store enhancers if any
);

// create  a redux store and report it
const store = createStore(rootReducer, initialState, enhancer);

export default store;
