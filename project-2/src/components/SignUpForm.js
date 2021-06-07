import React, { useState } from 'react';

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
        <label htmlFor="handle">Handle</label>
        <input className="form-control" 
          id="handle" 
          name="handle"
          onChange={handleChange}
          />
      </div>

      {/* buttons */}
      <div className="form-group">
        <button className="btn btn-primary mr-2" onClick={handleSignUp}>Sign-up</button>
        <button className="btn btn-primary" onClick={handleSignIn}>Sign-in</button>
      </div>
    </form>
  )
}

export default SignUpForm