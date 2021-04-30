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

  export const createUserProfileDocument = async (userAuth, additinalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email } = userAuth;
      const createdAt = new Date()

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additinalData
        })
      }
      catch (error) {
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;