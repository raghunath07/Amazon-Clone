import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBXagFiC1oEvyzoZY7f2LGZMGaUnDhOwoI",
    authDomain: "store-clone-b2501.firebaseapp.com",
    databaseURL: "https://store-clone-b2501.firebaseio.com",
    projectId: "store-clone-b2501",
    storageBucket: "store-clone-b2501.appspot.com",
    messagingSenderId: "1089340837294",
    appId: "1:1089340837294:web:8c2f425b433332fc7b4c3f",
    measurementId: "G-FRM5N9QEB8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };