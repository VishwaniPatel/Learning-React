import React, { useState } from 'react';
import './CustomValidation.css'; 
const CustomValidation = () => {
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');

  const handleUsernameChange = (event) => {
    const inputValue = event.target.value;
    setUsername(inputValue);

    // Perform custom validation
    if (inputValue.trim() === '') {
      setUsernameError('Username is required');
    } else if (inputValue.length < 3) {
      setUsernameError('Username must be at least 3 characters');
    } else {
      setUsernameError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic
  };

  return (
    <form className="my-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={handleUsernameChange}
        placeholder="Enter username"
        className={usernameError ? 'input-invalid' : ''} // Apply input-invalid class if there's an error
      />
      {usernameError && <p className="error-message">{usernameError}</p>} {/* Use error-message class for error message */}
      <button type="submit" className="submit-button">Submit</button> {/* Apply styling to submit button */}
    </form>
  );
};

export default CustomValidation;
