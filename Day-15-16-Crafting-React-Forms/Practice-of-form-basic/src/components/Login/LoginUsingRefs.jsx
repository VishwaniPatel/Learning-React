import { useRef } from 'react';
import './Login.css'; // Importing the CSS file with custom styles

export default function LoginUsingRefs() {
// get values using refs

  function handleSubmit(event) {
    event.preventDefault();
    
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
