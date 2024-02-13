import React from 'react';
import { useFormik } from 'formik';
const SignupFormWithFormik = () => {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
// set initial values and onSubmit method using useFormik
  return (
    <form>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
      />

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
export default SignupFormWithFormik;