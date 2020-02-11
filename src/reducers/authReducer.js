import { LOGGED_IN, LOGGED_OUT, REGISTER_USER } from "../actions/types";

const initialState = {
  isAuthenticated: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGGED_IN:
      console.log("true");
      return {
        ...state,
        isAuthenticated: true
      };
    case LOGGED_OUT:
      console.log("false");
      return {
        ...state,
        isAuthenticated: false
      };
    case REGISTER_USER:
      console.log("registered");
      return {
        ...state,
        isAuthenticated: false
      };
    default:
      return state;
  }
}
