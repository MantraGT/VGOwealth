// Firebase configuration
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB5YHGh1xPEc94UsU5dRXkgIJppD2-yVco",
  authDomain: "vgowealth.firebaseapp.com",
  projectId: "vgowealth",
  storageBucket: "vgowealth.firebasestorage.app",
  messagingSenderId: "320934405030",
  appId: "1:320934405030:web:0dd82ba88fcab861312567",
  measurementId: "G-6J22N2RX04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile };
