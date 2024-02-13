import { useRef } from 'react';
import './Login.css'; // Importing the CSS file with custom styles

export default function LoginUsingRefs() {
  const email = useRef();
  const password = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    console.log(enteredEmail, enteredPassword);
    // email.current.value = '';
    // password.current.value = '';
    event.target.reset();
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email" className="label">Email</label>
          <input id="email" type="email" name="email" className="input" ref={email} />
        </div>

        <div className="control no-margin">
          <label htmlFor="password" className="label">Password</label>
          <input id="password" type="password" name="password" className="input" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-reset">Reset</button>
        <button type="submit" className="button">Login</button>
      </p>
    </form>
  );
}
