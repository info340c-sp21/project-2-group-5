import React from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import '../App.css';
import './landing.css';

function Landing(props) {

  let header = null;
  let buttons = null;

  const handleSignOut = () => {
    firebase.auth().signOut()
        .catch((error) => console.log(error.message));
  }

  if (!props.user) {
    header = (
      <h1>Welcome to Grenville</h1>
    );
    buttons = (
      <div className='landing-btns'>
        <Link to="/Login"><button className='btn1'>Log In</button></Link>
        <Link to="/Login"><button className='btn2'>Sign Up</button></Link>
      </div>
    );
  } else {
    header = (
      <h1>Welcome to Grenville, {props.user.displayName}</h1>
    );
    buttons = (
      <div className='landing-btns'>
        <button className='btn2' onClick={handleSignOut}>Sign Out</button>
      </div>
    );
  }

  return (
    <div className='landing-container'>
      <video src='/videos/video.mp4' autoPlay loop muted />
      {header}
      <p>Let's live a greener life!</p>
      {buttons}
    </div>
  );
}

export default Landing;