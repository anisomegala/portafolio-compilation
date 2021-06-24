import firebase from "firebase/app";
import "firebase/firestore"; 
import "firebase/auth";

const firebaseConfig = {
        apiKey: "AIzaSyDBw0zgB_doAXz-U3ykqaBQZYPNjP49EyM",
        authDomain: "mystore-asg.firebaseapp.com",
        projectId: "mystore-asg",
        storageBucket: "mystore-asg.appspot.com",
        messagingSenderId: "367873199848",
        appId: "1:367873199848:web:0b1875ec270bf9d46cc35d",
        measurementId: "G-K2SL6WEVVG"
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
  
