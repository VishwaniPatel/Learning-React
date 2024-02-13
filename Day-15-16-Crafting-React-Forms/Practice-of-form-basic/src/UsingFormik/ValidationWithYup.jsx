import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ValidationWithYup   = () => {
  // add initial values, validation schema and inSubmit using useFormik

  return (
    <form>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        type="text"
        // reduce boilder plate with getFieldProps
      />
      {/* display error*/} 

      <label htmlFor="lastName">Last Name</label>
      <input id="lastName" type="text" />

      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" />

      <button type="submit">Submit</button>
    </form>
  );
};
export default ValidationWithYup;