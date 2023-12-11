// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: 'blogging-304.firebaseapp.com',
  projectId: 'blogging-304',
  storageBucket: 'blogging-304.appspot.com',
  messagingSenderId: '57952891776',
  appId: '1:57952891776:web:c51ef00c8155cec08b8765',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
