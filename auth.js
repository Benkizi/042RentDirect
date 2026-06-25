import { auth, db } from './firebase-config.js';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const form = document.getElementById('registerForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const role = document.getElementById('role').value;

  try {
    // 1. Create user in Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // 2. Save user role to Firestore 'users' collection
    await setDoc(doc(db, "users", user.uid), {
      email: email,
      role: role,
      createdAt: new Date()
    });

    alert("Registration successful! Welcome to 042RentDirect.");
  } catch (error) {
    alert("Error: " + error.message);
  }
});