import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyBNtj1D4XGciiLhNPES0BIsfG-KbOIXs4Y",
    authDomain: "messenger-42833.firebaseapp.com",
    projectId: "messenger-42833",
    storageBucket: "messenger-42833.appspot.com",
    messagingSenderId: "391738043547",
    appId: "1:391738043547:web:8d6d3ebe5b32d4dc6d2a3e",
    measurementId: "G-RT7J72F1L3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();
  const db = firebase.firestore();
  export {auth , db }