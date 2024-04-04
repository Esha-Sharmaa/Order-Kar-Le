// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8CIOaFqRQrx45xMS1hJBOOTZaVqW1c5k",
  authDomain: "orderkarle-2f9d6.firebaseapp.com",
  projectId: "orderkarle-2f9d6",
  storageBucket: "orderkarle-2f9d6.appspot.com",
  messagingSenderId: "64764291237",
  appId: "1:64764291237:web:819b896c551d9be4c4c54c",
  measurementId: "G-2E0BGH0FBC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
