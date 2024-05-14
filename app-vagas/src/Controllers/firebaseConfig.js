import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {Firestore} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import 'firebase/auth'

//inicialização do firebase
const firebaseConfig = {
  apiKey: "AIzaSyDmw8w1E03_6mrCHh5PAUThECcCRRot3us",
  authDomain: "app-rh-em-acao.firebaseapp.com",
  projectId: "app-rh-em-acao",
  storageBucket: "app-rh-em-acao.appspot.com",
  messagingSenderId: "765122616011",
  appId: "1:765122616011:web:eeb6138eaa51c15d56194e",
  measurementId: "G-XT6BCCCLNN"
};

  // Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

