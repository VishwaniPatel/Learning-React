import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login/Login'
import LoginUsingRefs from './components/Login/LoginUsingRefs'
import Signup from './components/SignUp/SignUpWithFormData'
import CustomValidation from './components/Login/CustomValidation'
import SignupForm from './UsingFormik/SimpleForm'
import SignupFormWithFormik from './UsingFormik/SignUpForm'
import {  FieldArrayExample } from './UsingFormik/FieldArray'
import ValidationWithYup from './UsingFormik/ValidationWithYup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Basic Login Form */}
     <Login/>

     {/* get values using Refs */}
     {/* <LoginUsingRefs/> */}

     {/* Basic Signup Form */}
     {/* <Signup/> */}

     {/* Adding the custom validation */}
     {/* <CustomValidation/> */}

     {/* Signup form with Formik */}
     {/* <SignupForm/> */}
     {/* <SignupFormWithFormik/> */}

     {/* Example of adding add using FieldArray */}
     {/* <FieldArrayExample/> */}

     {/* Adding Validation using Yup */}
     {/* <ValidationWithYup/> */}
    </>
  )
}

export default App
