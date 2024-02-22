import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import employeeService from "../service/employeeService";

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 80%;
  margin: 20px;
  background-color: white;
`;

const StyledTableHeader = styled.th`
  background-color: #99cdcf;
  color: white;
  padding: 10px;
  text-align: left;
`;

const StyledTableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const StyledTableCell = styled.td`
  padding: 10px;
`;

const StyledActionButton = styled.span`
  padding: 4px;
  margin: 4px;
  border: 1px solid #d1d0d0;
  border-radius: 4px;
`;




const EmployeeList = () => {
  const navigate = useNavigate();

  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = () => {
    employeeService.getAllEmployees().then((res) => {
      console.log(res);
      setEmployeesData(res);
    });
  };
  //  employee state
  const [employeesData, setEmployeesData] = useState([]);

  //  delete employee
  const handleDeleteEmployee = (id) => {
    employeeService.deleteEmployee(id).then((res) => {


      // showing popover
      getAllEmployees();
    });
  };

  return (
    <div>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Name</StyledTableHeader>
            <StyledTableHeader>Email</StyledTableHeader>
            <StyledTableHeader>Actions</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {employeesData.map((employee) => (
            <StyledTableRow key={employee.id}>
              <StyledTableCell>{employee.name}</StyledTableCell>
              <StyledTableCell>{employee.email}</StyledTableCell>
              <StyledTableCell>
                <StyledActionButton
                  onClick={() => handleDeleteEmployee(employee.id)}
                >
                  delete
                </StyledActionButton>
                <StyledActionButton
                  onClick={() => navigate(`/employee-form/${employee.id}`)}
                >
                  Edit
                </StyledActionButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
          {!employeesData.length && (
            <StyledTableRow>
              <StyledTableCell colSpan={3}> No Data Found </StyledTableCell>
            </StyledTableRow>
          )}
        </tbody>
      </StyledTable>
      <Link to={"/employee-form"}>form</Link>
    </div>
  );
};

export default EmployeeList;
