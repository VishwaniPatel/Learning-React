// employeeService.js
import axios from "axios";

const API_URL = "http://localhost:3000"; // Change the URL according to your JSON server setup

const service = axios.create({ baseURL: API_URL });
// can export method individually like below





export const getEmployeeById = async (id) => {
  try {
    
    const response = await axios.get(`${API_URL}/employees/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching employees:", error);
    throw error;
  }
};







// or can export whole service object like below
const employeeService = {
  getEmployeeById: async (id) => {
    try {
      const response = await service.get(`/employees/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching employees:", error);
      throw error;
    }
  },
  getAllEmployees: async () => {
    try {
      const response = await service.get(`/employees`);
      return response.data;
    } catch (error) {
      console.error("Error fetching employees:", error);
      throw error;
    }
  },

  updateEmployee: async (id, updatedEmployee) => {
    try {
      const response = await service.put(`/employees/${id}`, updatedEmployee);
      return response.data;
    } catch (error) {
      console.error("Error adding employee:", error);
      throw error;
    }
  },

  addEmployee: async (employee) => {
    try {
      const response = await service.post(`/employees`, employee);
      return response.data;
    } catch (error) {
      console.error("Error adding employee:", error);
      throw error;
    }
  },

  deleteEmployee: async (id) => {
    try {
      await service.delete(`/employees/${id}`);
    } catch (error) {
      console.error("Error deleting employee:", error);
      throw error;
    }
  },
};

export default employeeService;
