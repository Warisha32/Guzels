import firebase from "firebase/app";

import "firebase/firestore";
import 'firebase/auth';
console.log = console.warn = console.error = () => {};

// Look ma, no error!
console.error('Something bad happened.');

const firebaseConfig = {
    apiKey: "AIzaSyDTf51qNhu_LnDJrYhWJUI2n2q9FaEt05o",
    authDomain: "fir-auth-94d8f.firebaseapp.com",
    databaseURL: "https://fir-auth-94d8f-default-rtdb.firebaseio.com",
    projectId: "fir-auth-94d8f",
    storageBucket: "fir-auth-94d8f.appspot.com",
    messagingSenderId: "678285485190",
    appId: "1:678285485190:web:6a7854a120f7c92e2f9d07",
    measurementId: "G-S1T6P6P6VG"
  };
   try {
    firebase.initializeApp(firebaseConfig)
  } catch (err) {
    // we skip the “already exists” message which is
    // not an actual error when we’re hot-reloading
    if (!firebase.app.length) {
      console.error('Firebase initialization error raised', err.stack)
    }
  }
  const auth=firebase.auth()
  const db=firebase.firestore()
   export {db,auth};