import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAPXHRXzyZSSJwCmexX64rZfy3JM8J_HEM",
    authDomain: "task-manager-chat-e6e92.firebaseapp.com",
    projectId: "task-manager-chat-e6e92",
    storageBucket: "task-manager-chat-e6e92.appspot.com",
    messagingSenderId: "758420912822",
    appId: "1:758420912822:web:c0bd1972156aac7ae3c417",
    measurementId: "G-BGJ0EGN7P3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
