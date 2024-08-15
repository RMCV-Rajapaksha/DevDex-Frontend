V// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXb-JTK1LN06Z1Dlluj6bfwZNHQz_rR8o",
  authDomain: "devdex-819fa.firebaseapp.com",
  projectId: "devdex-819fa",
  storageBucket: "devdex-819fa.appspot.com",
  messagingSenderId: "340730580433",
  appId: "1:340730580433:web:4b5e36e90333ec132424f0",
  measurementId: "G-TBX3F93W27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);