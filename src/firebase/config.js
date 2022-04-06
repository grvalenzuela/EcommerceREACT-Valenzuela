// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdLPLdV9YrNvmhU4W8Y-c34_dXb9jTuyg",
  authDomain: "ecommercereact-valenzuela.firebaseapp.com",
  projectId: "ecommercereact-valenzuela",
  storageBucket: "ecommercereact-valenzuela.appspot.com",
  messagingSenderId: "520299835344",
  appId: "1:520299835344:web:1112fb9151b2f15712d3d5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
  return app;
};
