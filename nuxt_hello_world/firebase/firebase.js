// Import the functions you need from the SDKs you need

import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { collection, getDoc, getDocs, getFirestore, onSnapshot, query, QuerySnapshot } from "firebase/firestore";
import { onUnmounted, reactive } from "vue";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAC42Jyrc6PUprA_fmVtmGAcUvL8HPiLxY",

  authDomain: "myapp-5fb21.firebaseapp.com",

  projectId: "myapp-5fb21",

  storageBucket: "myapp-5fb21.appspot.com",

  messagingSenderId: "671642384568",

  appId: "1:671642384568:web:dae645d42a8dca7aab1c4d"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}
