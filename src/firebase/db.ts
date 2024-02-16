import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
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


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db