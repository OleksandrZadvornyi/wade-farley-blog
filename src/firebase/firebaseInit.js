import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCKDDnP_aqshZOhfcqGfCCrGYvKBBBhQg",
  authDomain: "wade-farley-blog.firebaseapp.com",
  projectId: "wade-farley-blog",
  storageBucket: "wade-farley-blog.appspot.com",
  messagingSenderId: "774648423826",
  appId: "1:774648423826:web:fac32e4e9c88a48fc1cd4b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
