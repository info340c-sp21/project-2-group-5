import React, { useState } from 'react';
import './signup.css';

// import css

function SignUpForm(props) {
  //storing all form values in a single object for "convenience"
  const [formValues, setFormValues] = useState({
    'email': undefined,
    'password': undefined,
    'handle': undefined,
  })
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [handle, setHandle] = useState('')
  // const [avatar, setAvatar] = useState()

  //update state for specific field
  const handleChange = (event) => {
    let field = event.target.name; //which input
    let value = event.target.value; //what value

    let copy = {...formValues}
    copy[field] = value //change this field
    setFormValues(copy)
  }

  //handle signUp button
  const handleSignUp = (event) => {
    event.preventDefault(); //don't submit
    props.signUpCallback(formValues.email, formValues.password, formValues.handle);
  }

  //handle signIn button
  const handleSignIn = (event) => {
    event.preventDefault(); //don't submit
    props.signInCallback(formValues.email, formValues.password);
  }

  return (
    <div className="SignupForm">
    <form>
      {/* email */}
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input className="form-control" 
          id="email" 
          type="email" 
          name="email"
          onChange={handleChange}
          />
      </div>
      
      {/* password */}
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input className="form-control" 
          id="password" 
          type="password"
          name="password"
          onChange={handleChange}
          />
      </div>

      {/* handle */}
      <div className="form-group">
        <label htmlFor="handle">User Name</label>
        <input className="form-control" 
          id="handle" 
          name="handle"
          onChange={handleChange}
          />
      </div>

      {/* buttons */}
      <div className="form-group">
        <div className="button-group">
        <button className="sign-up" onClick={handleSignUp}>Sign-Up</button>
        <button className="sign-in" onClick={handleSignIn}>Sign-In</button>
        </div>
      </div>
    </form>
    </div>
  )
}

export default SignUpForm