import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import firebaseConfig from "./config/firebaseConfig";

const initialState = {};

const middleware = [thunk.withExtraArgument({ getFirebase, getFirestore })];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middleware),
    reduxFirestore(firebaseConfig),
    reactReduxFirebase(firebaseConfig)
  )
);

export default store;
