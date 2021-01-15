import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBCcUr-kEEm9tJhSMB6MCvZ58LdpcQB7mo",
  authDomain: "snapchat-clone-f3442.firebaseapp.com",
  projectId: "snapchat-clone-f3442",
  storageBucket: "snapchat-clone-f3442.appspot.com",
  messagingSenderId: "227418385030",
  appId: "1:227418385030:web:0f807dbf6022ca09b83f07",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
