import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW2uIZxqqtlf25MqcLfGD4wPLfpGgTXwM",
  authDomain: "chatapplication-8199d.firebaseapp.com",
  projectId: "chatapplication-8199d",
  storageBucket: "chatapplication-8199d.appspot.com",
  messagingSenderId: "793788565601",
  appId: "1:793788565601:web:a5982bd5ac6c4182d24220"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);