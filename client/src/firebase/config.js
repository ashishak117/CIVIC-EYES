// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Fallback to hardcoded values if env vars are not set
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyC3E8Fryh6wRGUPy24LKigqIH4V2z0Qld4",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "civic-eyes.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "civic-eyes",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "civic-eyes.firebasestorage.app",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "750005524727",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:750005524727:web:098a279b5798a7a2231bf2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
