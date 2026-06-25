// 1. Import the Firebase core and services
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // For our database
import { getAuth } from "firebase/auth";           // For login/registration
import { getStorage } from "firebase/storage";     // For property photos

// 2. PASTE YOUR CONFIG HERE (Replace this object with your copied keys)
// 1. Import the Firebase core and services
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // For our database
import { getAuth } from "firebase/auth";           // For login/registration
import { getStorage } from "firebase/storage";     // For property photos

// 2. PASTE YOUR CONFIG HERE (Replace this object with your copied keys)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "042rentdirect.firebaseapp.com", // Example
  projectId: "042rentdirect",                  // Example
  storageBucket: "042rentdirect.appspot.com",  // Example
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// 3. Initialize the Firebase App
const app = initializeApp(firebaseConfig);

// 4. Initialize the specific services and EXPORT them
// We export these so your other JavaScript files can use them to read/write data.
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

// 3. Initialize the Firebase App
const app = initializeApp(firebaseConfig);

// 4. Initialize the specific services and EXPORT them
// We export these so your other JavaScript files can use them to read/write data.
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);