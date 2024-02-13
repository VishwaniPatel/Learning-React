import React from 'react';
import './Signup.css'; // Importing the CSS file with custom styles

export default function Signup() {
  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const acquisitionChannel = fd.getAll('acquisition');
    const data = Object.fromEntries(fd.entries());
    data.acquisition = acquisitionChannel;
    console.log(data);
    event.target.reset();
  }

  return (
    <form className="signup-container" onSubmit={handleSubmit}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email" className="signup-label">Email</label>
        <input id="email" type="email" name="email" className="signup-input" />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password" className="signup-label">Password</label>
          <input id="password" type="password" name="password" className="signup-input" />
        </div>

        <div className="control">
          <label htmlFor="confirm-password" className="signup-label">Confirm Password</label>
          <input id="confirm-password" type="password" name="confirm-password" className="signup-input" />
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name" className="signup-label">First Name</label>
          <input type="text" id="first-name" name="first-name" className="signup-input" />
        </div>

        <div className="control">
          <label htmlFor="last-name" className="signup-label">Last Name</label>
          <input type="text" id="last-name" name="last-name" className="signup-input" />
        </div>
      </div>

      <div className="control">
        <label htmlFor="role" className="signup-label">What best describes your role?</label>
        <select id="role" name="role" className="signup-select">
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input type="checkbox" id="google" name="acquisition" value="google" />
          <label htmlFor="google" className="signup-checkbox-label">Google</label>
        </div>

        <div className="control">
          <input type="checkbox" id="friend" name="acquisition" value="friend" />
          <label htmlFor="friend" className="signup-checkbox-label">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" />
          <label htmlFor="other" className="signup-checkbox-label">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions" className="signup-checkbox-label">
          <input type="checkbox" id="terms-and-conditions" name="terms" />
          I agree to the terms and conditions
        </label>
      </div>

      <p className="signup-actions">
        <button type="reset" className="signup-button signup-button-flat">Reset</button>
        <button type="submit" className="signup-button">Sign up</button>
      </p>
    </form>
  );
}
