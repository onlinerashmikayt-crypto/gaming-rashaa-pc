// firebase.js

import { initializeApp } from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc
} from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyDTGSEil6BOTWZa2dATRbGbGIVUymmwKPo",
  authDomain: "gaming-rash-web.firebaseapp.com",
  projectId: "gaming-rash-web",
  storageBucket: "gaming-rash-web.firebasestorage.app",
  messagingSenderId: "580309766481",
  appId: "1:580309766481:web:36da9e19491e9fe40bc370",
  measurementId: "G-KGDCEC5EKP"
};


// Firebase start
const app = initializeApp(firebaseConfig);


// Authentication
const auth = getAuth(app);


// Database
const db = getFirestore(app);


// Export
export {
  app,
  auth,
  db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  doc,
  setDoc,
  getDoc
};
