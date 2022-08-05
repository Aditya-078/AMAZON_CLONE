
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAdOHsGxP3zKzLM36Di4wObkNookgz5nnI",
    authDomain: "challenge-c1bd7.firebaseapp.com",
    projectId: "challenge-c1bd7",
    storageBucket: "challenge-c1bd7.appspot.com",
    messagingSenderId: "138267883351",
    appId: "1:138267883351:web:54e5398143a61c55c5b012",
    measurementId: "G-F11Y0TKSGF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth}


