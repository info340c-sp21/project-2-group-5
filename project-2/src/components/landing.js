import React from 'react';
import '../App.css';
import './landing.css';

function Landing() {
  return (
    <div className='landing-container'>
      <video src='/videos/video.mp4' autoPlay loop muted />
      <h1>Welcome to Grenville</h1>
      <p>Let's live a greener life!</p>
      <div className='landing-btns'>
        <button className='btn1'>Log In</button>
        <button className='btn2'>Sign Up</button>
      </div>
    </div>
  );
}

export default Landing;