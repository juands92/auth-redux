import { LOGGED_IN, LOGGED_OUT, REGISTER_USER } from "./types";

//Login user
export const loginUser = userData => {
  console.log("userData", userData);
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(userData.email, userData.password)
      .then(() => dispatch({ type: LOGGED_IN }))
      .catch(err => console.log(err));
  };
};

//Logout user
export const logOutUser = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({
          type: LOGGED_OUT
        });
      })
      .catch(err => console.log(err));
  };
};

//Register User
export const registerUser = (userData, history) => {
  console.log("userData", userData);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase
      .auth()
      .createUserWithEmailAndPassword(userData.email, userData.password)
      .then(res => {
        console.log(res);
        return firestore
          .collection("users")
          .doc(res.user.uid)
          .set({
            firstName: userData.firstName,
            lastName: userData.lastName,
            handler: userData.firstName
          });
      })
      .then(() => {
        dispatch({
          type: REGISTER_USER
        });
      })
      .then(() => history.push("/login"))
      .catch(err => console.log(err));
  };
};
