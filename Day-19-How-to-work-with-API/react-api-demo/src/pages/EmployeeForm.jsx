import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import * as Yup from "yup";
import employeeService from "../service/employeeService";

// ----------------------------------------------styles ---------------------------------------------------
const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 1rem;
`;

const StyledInput = styled.input`
  padding: 8px;
  font-size: 14px;
  margin-bottom: 8px;
`;

const StyledButton = styled.button`
  padding: 10px;
  background: #f18da6;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background: #99cdcf;
  }
`;

const StyledError = styled.div`
  color: red;
  font-size: 12px;
  margin-bottom: 12px;
`;
// ----------------------------------------------styles ---------------------------------------------------

//  EmployeeForm component
const EmployeeForm = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  //  to set emp details on route change
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
  });

  /**
   * gets emp by id
   */
  const fetchEmployeeData = async () => {
    try {
      const employeeData = await employeeService.getEmployeeById(id);
      setEmployee(employeeData);
      console.log(employeeData);
    } catch (error) {
      console.error("Error fetching employee data:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchEmployeeData();
    }
  }, [id]);

  const formik = useFormik({
    enableReinitialize: true, // to reinitialize form
    initialValues: {
      name: employee.name ,
      email: employee.email,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: (values) => {
      // You can perform any action with the form data here, such as sending it to a server.
      console.log("Form submitted:", values);
      if (id) {
        employeeService.updateEmployee(id, values).then((res) => {
          navigate("/employee-list");
        });
      } else {
        employeeService.addEmployee(values).then((res) => {
          
          navigate("/employee-list");
        });
      }
    },
  });

  return (
    <>
      {" "}
      <StyledContainer>
        <div>
          <img
            style={{ width: 400, height: 400 }}
            src="http://res.cloudinary.com/oscartbeamish/image/upload/v1504172576/14bc155f03a9be4e10c0bd6d34067f6e_ng1urv.jpg"
          />
        </div>
        <div
          style={{
            height: 400,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",

            position: "relative",
          }}
        >
          <StyledForm onSubmit={formik.handleSubmit}>
            <StyledInput
              type="text"
              name="name"
              placeholder="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <StyledError>{formik.errors.name}</StyledError>
            )}

            <StyledInput
              type="email"
              name="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <StyledError>{formik.errors.email}</StyledError>
            )}

            <StyledButton type="submit">Submit</StyledButton>
            <Link
              style={{ position: "absolute", right: 24, bottom: 10 }}
              to={"/employee-list"}
            >
              List
            </Link>
          </StyledForm>
        </div>
      </StyledContainer>
    </>
  );
};

export default EmployeeForm;
