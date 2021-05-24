import React from 'react';
import '../App.css';
import { Button } from './Button';
import './landing.css';

function Landing() {
  return (
    <div className='landing-container'>
      <video src='/videos/video.mp4' autoPlay loop muted />
      <h1>Welcome to Grenville</h1>
      <p>Let's live a greener life!</p>
      <div className='landing-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Log In
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
            Sign Up
        </Button>
      </div>
    </div>
  );
}

export default Landing;