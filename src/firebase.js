
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDFMDA7lTqwZUKyZ96rzBZ8tK8R3ERLAMk",
  authDomain: "where-is-waldo-2b09a.firebaseapp.com",
  projectId: "where-is-waldo-2b09a",
  storageBucket: "where-is-waldo-2b09a.appspot.com",
  messagingSenderId: "192340184477",
  appId: "1:192340184477:web:e6ece0defdafe7f9a2f374"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export default firebase;