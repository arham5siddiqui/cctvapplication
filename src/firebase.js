import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBpHYf9b_oBbF1wPraQWSDAzm213pOEaPw",
  authDomain: "login-cctv-05.firebaseapp.com",
  projectId: "login-cctv-05",
  storageBucket: "login-cctv-05.appspot.com",
  messagingSenderId: "271183094211",
  appId: "1:271183094211:web:77e7d9da0b790815959d76"
});

const auth = firebase.auth();

export { auth };
