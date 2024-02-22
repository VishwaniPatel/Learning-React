import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import EmployeeForm from "./pages/EmployeeForm";
import EmployeeList from "./pages/EmployeeList";

const AppRouting = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={EmployeeList} />
        <Route path="/employee-list" Component={EmployeeList} />
        <Route path="/employee-form" Component={EmployeeForm}>
          <Route path=":id" />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouting;
