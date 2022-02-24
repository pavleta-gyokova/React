import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBqliVkeCZyr2VZKkeO_4ftTN_k6zU-jvI",
    authDomain: "shopping-app-crown.firebaseapp.com",
    projectId: "shopping-app-crown",
    storageBucket: "shopping-app-crown.appspot.com",
    messagingSenderId: "200236710576",
    appId: "1:200236710576:web:472080666ee5b8f4b2d975",
    measurementId: "G-43L9HHT4B0"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;