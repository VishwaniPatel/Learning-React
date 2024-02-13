import React, { useContext, useState } from 'react'
import { CurrentUserContext } from './store/Context';
import Button from './Button';

function LoginForm() {
  //  set current user using context
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const canLogin = firstName.trim() !== '' && lastName.trim() !== '';
    return (
      <>
        <label>
          First name{': '}
          <input
            required
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last name{': '}
          <input
          required
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </label>
        <Button
          disabled={!canLogin}
          onClick={() => {
            setCurrentUser({
              name: firstName + ' ' + lastName
            });
          }}
        >
          Log in
        </Button>
        {!canLogin && <i>Fill in both fields.</i>}
      </>
    );
}

export default LoginForm