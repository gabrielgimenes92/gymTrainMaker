import React, { useState } from 'react';
import InsideApp from './Layout/InsideApp'
import Login from './Layout/Login'

import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator, signInWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = initializeApp({
  apiKey: "AIzaSyAKqVEE4GmUFPH-qUc5XIv-DSmS786At2g",
  authDomain: "gymtrainer-ae091.firebaseapp.com",
  projectId: "gymtrainer-ae091",
  storageBucket: "gymtrainer-ae091.appspot.com",
  messagingSenderId: "322694041373",
  appId: "1:322694041373:web:9f17f8b5eb3250f5639bf4",
  measurementId: "G-2FJH6MSDXS"
});

const auth = getAuth(firebaseApp);
connectAuthEmulator(auth, "http://localhost:9099");

interface IState {

}

function App() {

  let loadApp = false;

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const loginEmailPassword = async () => {
    const userCredentials = await signInWithEmailAndPassword(auth, email, password);
    
    console.log(userCredentials.user);
  }


  return (
    <div className="App">

    {
    loadApp ? <InsideApp /> : <Login 
      loginEmailPassword={loginEmailPassword}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      />
    }

    </div>
  );
}

export default App;
