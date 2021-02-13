import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAbX6AVGDTZyp3SvrvkAkwkCjLm7TTVhgM",
  authDomain: "clone-b037a.firebaseapp.com",
  projectId: "clone-b037a",
  storageBucket: "clone-b037a.appspot.com",
  messagingSenderId: "139081678451",
  appId: "1:139081678451:web:9ebfad75478c1906223406",
};


const firebaseApp = firebase.initiliazeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };