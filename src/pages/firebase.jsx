import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfJWcrR-D6ATy0GnPMWrIWOT1v5Zae5CY",
  authDomain: "mr-notes-cr.firebaseapp.com",
  projectId: "mr-notes-cr",
  storageBucket: "mr-notes-cr.appspot.com",
  messagingSenderId: "881011112655",
  appId: "1:881011112655:web:3973490765c7b1527615ba"
};

firebase.initializeApp(firebaseConfig);