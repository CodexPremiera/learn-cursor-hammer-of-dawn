import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDY-egkZoHiR43LRYL4AJzqwhiYJQ4N4n4",
  authDomain: "cursor-hammer-of-dawn.firebaseapp.com",
  projectId: "cursor-hammer-of-dawn",
  storageBucket: "cursor-hammer-of-dawn.firebasestorage.app",
  messagingSenderId: "1014196648201",
  appId: "1:1014196648201:web:3465fd430a685df283bbd8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };