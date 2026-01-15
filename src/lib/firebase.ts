import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBD1V98HRD4Gs_rcdkBuTXZWVMH7-C8fAc",
  authDomain: "howdway-7a7b8.firebaseapp.com",
  projectId: "howdway-7a7b8",
  storageBucket: "howdway-7a7b8.firebasestorage.app",
  messagingSenderId: "962590930012",
  appId: "1:962590930012:web:965155c7ad2bc769a62299",
};

const app = initializeApp(firebaseConfig);

// ✅ THIS IS WHAT CONTACT.TSX NEEDS
export const db = getFirestore(app);
