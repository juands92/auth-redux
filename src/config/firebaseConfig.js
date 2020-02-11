import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAm0X5A2zz3D8JLjFiSHTLayW8ED7wm1XU",
  authDomain: "fir-redux-cce49.firebaseapp.com",
  databaseURL: "https://fir-redux-cce49.firebaseio.com",
  projectId: "fir-redux-cce49",
  storageBucket: "",
  messagingSenderId: "520329594526",
  appId: "1:520329594526:web:cf5b345681d8afa1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
