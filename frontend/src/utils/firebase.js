import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "mockmentor-cff8d.firebaseapp.com",
  projectId: "mockmentor-cff8d",
  storageBucket: "mockmentor-cff8d.firebasestorage.app",
  messagingSenderId: "586826560450",
  appId: "1:586826560450:web:6e37da2b60a490e303dc5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider()

export {auth, provider}