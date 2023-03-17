import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBSAIBMoHvac_VJN4L9ekRmhGXbOrD24bM",
    authDomain: "twitter-clone-d1e94.firebaseapp.com",
    projectId: "twitter-clone-d1e94",
    storageBucket: "twitter-clone-d1e94.appspot.com",
    messagingSenderId: "23324560088",
    appId: "1:23324560088:web:c7b90cd624b12927a4e5ad",
    measurementId: "G-M4PLKPBS4F"
};
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)

export default db;