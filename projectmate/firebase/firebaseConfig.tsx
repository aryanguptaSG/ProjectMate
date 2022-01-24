// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVI1dsTGr7ZELoSQs-awsB18n-m0_Man0",
  authDomain: "projectmate-31.firebaseapp.com",
  projectId: "projectmate-31",
  storageBucket: "projectmate-31.appspot.com",
  messagingSenderId: "56340729933",
  appId: "1:56340729933:web:478984ee38c831ff430c04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



export default app;