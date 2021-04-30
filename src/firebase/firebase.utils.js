import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAV_XO5w5LqJ12FMCUNPI5f1omKqYeb0Z0",
    authDomain: "crwn-db-83f9a.firebaseapp.com",
    projectId: "crwn-db-83f9a",
    storageBucket: "crwn-db-83f9a.appspot.com",
    messagingSenderId: "135218958046",
    appId: "1:135218958046:web:3ed862802a47fff96c3c4f",
    measurementId: "G-H8WJNTF12N"
  }; 

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;