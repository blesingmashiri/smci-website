// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyISouz_H8uxlKZLrmytRrnwbkhEpjjxk",
  authDomain: "myreactapp-2aee2.firebaseapp.com",
  projectId: "myreactapp-2aee2",
  storageBucket: "myreactapp-2aee2.firebasestorage.app",
  messagingSenderId: "311263815616",
  appId: "1:311263815616:web:19ea852467302cc1160a25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
