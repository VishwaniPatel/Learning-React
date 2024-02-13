import React from 'react';
import { useFormik } from 'formik';

const SignupForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted

  return (
    <form>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;