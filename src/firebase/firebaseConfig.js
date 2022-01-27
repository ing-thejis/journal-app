

import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBu439Dpvf_yCEIfGmrUOi7xjbdaRf0YI",
  authDomain: "journal-app-eaff8.firebaseapp.com",
  projectId: "journal-app-eaff8",
  storageBucket: "journal-app-eaff8.appspot.com",
  messagingSenderId: "790852382732",
  appId: "1:790852382732:web:a04156c1dbec95ffa0be29"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
	db,
	googleAuthProvider,
	firebase
}