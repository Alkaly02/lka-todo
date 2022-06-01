import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDzDbwDYUi0-D0iNPlhL7CoNHPyxYmRioY",
  authDomain: "todo-app-dfdf9.firebaseapp.com",
  projectId: "todo-app-dfdf9",
  storageBucket: "todo-app-dfdf9.appspot.com",
  messagingSenderId: "781494290837",
  appId: "1:781494290837:web:b2368687fd23b7660e0e9c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);