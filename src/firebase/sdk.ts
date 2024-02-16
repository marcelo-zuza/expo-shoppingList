// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyipYjKvPT0bdLf12t2yjcVg-kPV_w9zg",
  authDomain: "shoppinglist-621bb.firebaseapp.com",
  projectId: "shoppinglist-621bb",
  storageBucket: "shoppinglist-621bb.appspot.com",
  messagingSenderId: "128312543898",
  appId: "1:128312543898:web:d2b96410cd648ca388ed23",
  measurementId: "G-XDHSVM4KEW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics