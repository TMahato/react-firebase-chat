import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';
import 'firebase/compat/auth';  

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCjndY5cUOGICewd8DXX17uEO7QF0XT584",
    authDomain: "captive-chat.firebaseapp.com",
    projectId: "captive-chat",
    storageBucket: "captive-chat.appspot.com",
    messagingSenderId: "332576726215",
    appId: "1:332576726215:web:ca7dd2bbd42ec97e1a32e2",
    measurementId: "G-KXPZNF4QMX"
})

const db = firebaseApp.firestore()

const auth = firebase.auth();

export { db , auth };
