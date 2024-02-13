import React, { useState } from 'react';
import './Login.css';

export default function Login() {

  // Using state for individual inputs
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');

  // Using state to manage form inputs collectively
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  });


  // handling individual input changes
 function handleEmailChange(event) {
    setEnteredEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setEnteredPassword(event.target.value);
  }


  const emailIsInvalid = enteredValues.email !== '' && !enteredValues.email.includes('@');


    const [didEdit, setDidEdit] = useState({
      email: false,
      password: false,
    });
  
    // const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');
    

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Submitted!');
    console.log(enteredValues);
    setEnteredValues({
      email: '',
    password: '',
    })
  }


function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  }

  // function handleInputChange(identifier, value) {
  //   setEnteredValues((prevValues) => ({
  //     ...prevValues,
  //     [identifier]: value,
  //   }));
  //   setDidEdit((prevEdit) => ({
  //     ...prevEdit,
  //     [identifier]: false,
  //   }));
  // }

  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

 

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email" className="label">Email</label>
          {/* <input id="email" type="email" name="email" className="input" onChange={handleEmailChange}/> */}
          <input
            id="email"
            type="email"
            name="email"
            className='input'
            onBlur={() => handleInputBlur('email')}
            onChange={(event) => handleInputChange('email', event.target.value)}
            value={enteredValues.email}
          />
            <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password" className="label">Password</label>
          <input id="password" type="password" name="password" className="input" onChange={handlePasswordChange} />
          {/* <input
            id="password"
            type="password"
            name="password"
            className='input'
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
            value={enteredValues.password}
          />*/}
        </div> 
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-reset">Reset</button>
        <button type="submit" className="button">Login</button>
      </p>
    </form>
  );
}
