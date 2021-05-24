import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD_ABE1Xx7Svwk9x70CS8dk1jT3XMK2RTk",
  authDomain: "couch-potato-651b6.firebaseapp.com",
  projectId: "couch-potato-651b6",
  storageBucket: "couch-potato-651b6.appspot.com",
  messagingSenderId: "235933825560",
  appId: "1:235933825560:web:3d8bf6db82e7bd79b5e16d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
