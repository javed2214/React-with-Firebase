import firebase from 'firebase';

var firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: "todoapp-c9c1a",
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_AP_ID
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export {db};