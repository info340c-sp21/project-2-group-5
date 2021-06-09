import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import SignUpForm from '../SignUpForm.js';
import { Redirect } from 'react-router';
 

function LoginPage (props){
    const handleSignUp = (email, password, handle) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredentials) => {
                let user = userCredentials.user;
                return user.updateProfile({
                    displayName: handle
                })
            })
            .catch((error) => console.log(error.message))
            .then(() => {
                <Redirect to="/" />
            });
    }

    const handleSignIn = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch((error) => console.log(error.message))
            .then(() => {
                <Redirect to="/" />
            });
    }

    let content = null;

    if (!props.user) {
        content = (
        <div>
            <SignUpForm
                signUpCallback={handleSignUp}
                signInCallback={handleSignIn}
            />
        </div>
        );
    } else {
        content = (
            <div>
                <p>Log-in successfully! Let's expore Grenville!</p>
            </div>
        );
    }

    return (
        <div>
            {content}
        </div>
    );
}



export default LoginPage;