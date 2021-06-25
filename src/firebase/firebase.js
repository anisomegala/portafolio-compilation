import firebase from "firebase/app";
import "firebase/firestore"; 
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyB2NdOd4-enJpSgOP_ltZS50GNZ1VJ9Vdw",
    authDomain: "portafolio-db-b8f2f.firebaseapp.com",
    projectId: "portafolio-db-b8f2f",
    storageBucket: "portafolio-db-b8f2f.appspot.com",
    messagingSenderId: "289580537574",
    appId: "1:289580537574:web:54498924f66aff0b4c8d27",
    measurementId: "G-WYW7LX7PEP"
  };

  export const creatUser = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          });

        } catch(error) {
          console.log(error.message);
        }
    }
    return userRef;

  };

  firebase.initializeApp(firebaseConfig); 

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
    'prompt': 'select_account'
  });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
  
