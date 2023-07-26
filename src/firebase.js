// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn_SgPKpAjTc0fNCgmPSGlzNNGShgeSLM",
  authDomain: "chat-app-95166.firebaseapp.com",
  projectId: "chat-app-95166",
  storageBucket: "chat-app-95166.appspot.com",
  messagingSenderId: "350203160945",
  appId: "1:350203160945:web:0da5f17dfdb82400a06ed0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
