import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDdojOuN3-mqZFJL80sSkPyn--tkZOHVlw",
  authDomain: "anorak-db.firebaseapp.com",
  databaseURL: "https://anorak-db.firebaseio.com",
  projectId: "anorak-db",
  storageBucket: "anorak-db.appspot.com",
  messagingSenderId: "895274800817",
  appId: "1:895274800817:web:70ba2c9ddebad1b6c8f490",
  measurementId: "G-68PG449E20"
};

firebase.initializeApp(config);

// export needed objects
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
