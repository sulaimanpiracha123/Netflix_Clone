import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDOeuurryWlQsJ7LRQXLk8PtrRbEvB_aaw",
    authDomain: "netflix-clone-eb797.firebaseapp.com",
    projectId: "netflix-clone-eb797",
    storageBucket: "netflix-clone-eb797.appspot.com",
    messagingSenderId: "123345373763",
    appId: "1:123345373763:web:4866c226c474305ac122f6"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  export {auth}