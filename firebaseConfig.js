import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6Ui51BrW4aic7m6Z9fpzP_hbC5fE-AJE",
  authDomain: "examen-2-6098d.firebaseapp.com",
  projectId: "examen-2-6098d",
  storageBucket: "examen-2-6098d.appspot.com",
  messagingSenderId: "433697949848",
  appId: "1:433697949848:web:360c27f1d64bcead7fe8ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
const db = getFirestore(app);

export { app, auth, db };
