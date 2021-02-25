import firebase from 'firebase';
require('@firebase/firestore');
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDDF1YaEgiSvhrH6tXwDY1wbA_IeAdncO4",
    authDomain: "book-santa-96544.firebaseapp.com",
    projectId: "book-santa-96544",
    storageBucket: "book-santa-96544.appspot.com",
    messagingSenderId: "585005292686",
    appId: "1:585005292686:web:d001b0814bc0d6feedbddf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();