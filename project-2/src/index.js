import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//firebase
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyDyGe0KHXc_ewhi40NXJR80Z1D0zbh2T2c",
    authDomain: "uw-info340-project2-group5.firebaseapp.com",
    databaseURL: "https://uw-info340-project2-group5-default-rtdb.firebaseio.com",
    projectId: "uw-info340-project2-group5",
    storageBucket: "uw-info340-project2-group5.appspot.com",
    messagingSenderId: "516451002600",
    appId: "1:516451002600:web:006830948516a41e2b415d",
    measurementId: "G-M6V5TRWNB4"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(<App />, document.getElementById('root'));