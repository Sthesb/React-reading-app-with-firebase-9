import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDRhUqeepzqLALcozRpgaLPTSj3hM6sFSY",
    authDomain: "reading-list-4c8ca.firebaseapp.com",
    projectId: "reading-list-4c8ca",
    storageBucket: "reading-list-4c8ca.appspot.com",
    messagingSenderId: "555608325974",
    appId: "1:555608325974:web:f422739bf2e2a323f520f7"
  };

//   init firebase
initializeApp(firebaseConfig)

// init firestore
const db = getFirestore()

// init auth
const auth = getAuth();

export { db, auth }