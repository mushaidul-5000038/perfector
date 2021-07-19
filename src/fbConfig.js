import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyAzxjhvnqCSZ60_u8b-Ve_d_NChna1iHJU",
    authDomain: "perfector-28bad.firebaseapp.com",
    projectId: "perfector-28bad",
    storageBucket: "perfector-28bad.appspot.com",
    messagingSenderId: "936530497019",
    appId: "1:936530497019:web:16ed71934dc50a0d894f5e",
    measurementId: "G-CV5C3PYZN4"
  };

  const db = firebase.initializeApp(firebaseConfig).firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  
  export { db, auth, storage };