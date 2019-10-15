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

// for storing user data in firebase
export const createUserProfileDocument = async (userAuth, extraData) => {
  // return if no user logged in
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // create snapshot if it hasn't been created
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date(); // timestamp

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...extraData
      });
    } catch (e) {
      console.log("error creating user", e.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  // loop over objectsToAdd array, get new doc ref for object, and batch calls together
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

// export needed objects
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
