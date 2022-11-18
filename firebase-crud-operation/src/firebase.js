import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDylVFz1uqJSrtVd4Yuv-IQW6qDlJmGIXc",
  authDomain: "react-contact-3b950.firebaseapp.com",
  projectId: "react-contact-3b950",
  storageBucket: "react-contact-3b950.appspot.com",
  messagingSenderId: "345388644283",
  appId: "1:345388644283:web:8e5b1dbb178cb22d2af69e"
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();

