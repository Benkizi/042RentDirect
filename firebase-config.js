// 1. Import the Firebase core and services
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // For our database
import { getAuth } from "firebase/auth";           // For login/registration
import { getStorage } from "firebase/storage";     // For property photos

// 2. PASTE YOUR CONFIG HERE (Replace this object with your copied keys)
const firebaseConfig = {
  apiKey: "AIzaSyBY53L25TyPUWFrETnYXvw9_24vBTg_4-8",
  authDomain: "rentdirect-5db89.firebaseapp.com",
  projectId: "rentdirect-5db89",
  storageBucket: "rentdirect-5db89.firebasestorage.app",
  messagingSenderId: "451291535150",
  appId: "1:451291535150:web:3de05556546266eaf98cbf"
};

// 3. Initialize the Firebase App
const app = initializeApp(firebaseConfig);

// 4. Initialize the specific services and EXPORT them
// We export these so your other JavaScript files can use them to read/write data.
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);