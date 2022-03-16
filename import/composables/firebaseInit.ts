// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCJUMBZvoj68lEoqAQqjw8A8MbS-_TjUyU",

  authDomain: "stockapp-aaa8d.firebaseapp.com",

  projectId: "stockapp-aaa8d",

  storageBucket: "stockapp-aaa8d.appspot.com",

  messagingSenderId: "652961091083",

  appId: "1:652961091083:web:80118c25402f1b25a0810e"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth()

export default{
    auth,
}