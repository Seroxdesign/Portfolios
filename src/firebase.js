import * as firebase from 'firebase/app'

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyBWoKFnkEOwOxAKeLjxdPX2KObQBr25hPc",
  authDomain: "serotoninportfolio.firebaseapp.com",
  projectId: "serotoninportfolio",
  storageBucket: "serotoninportfolio.appspot.com",
  messagingSenderId: "432863754193",
  appId: "1:432863754193:web:f5a4ec8154fc1e1dcc12f0",
  measurementId: "G-XXF9M2CPRR"
};

const app = initializeApp(firebaseConfig);

export default app