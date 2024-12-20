import axios from 'axios';
import { FETCH_EMPLOYEES, ADD_EMPLOYEE, UPDATE_EMPLOYEE, DELETE_EMPLOYEE } from './ActionTypes';

const BASE_URL = "https://jsonplaceholder.typicode.com";

//redux-thunk - allows you to handle asynchronous operations like API requests 
//directly within your Redux action creators.

// thunk action to fetch all employee
export const fetchEmployees = () => {
    return async(dispatch) => {
        try {
            const response = await axios.get(BASE_URL + '/users'); 
            dispatch({
                type: FETCH_EMPLOYEES,
                payload: response.data
            });
        } catch(error) {
            console.error("Error fetching employees:", error);
        }
    };
};

//add employee
export const addEmployee = (employee) => {
    return async (dispatch) => {
        try {
            const res = await axios.post(BASE_URL + '/users', employee);
            dispatch({
                type: ADD_EMPLOYEE,
                payload: res.data,
            });
        } catch (error) {
            console.error("Error fetching employees:", error);
        }
    };
};

//update employee
export const updateEmployee = (employee) => {
    return async (dispatch) => {
        try {
            const res = await axios.put(`${BASE_URL}/users/${employee.id}`, employee);
            dispatch({
                type: UPDATE_EMPLOYEE,
                payload: res.data, // response from the API contains the updated employee data
            });
        } catch (error) {
            console.error("Error updating employee:", error);
        }
    };
};

//delete employee
export const deleteEmployee = (id) => {
    return async (dispatch) => {
      try {
        await axios.delete(`${BASE_URL}/users/${id}`);
        dispatch({
          type: DELETE_EMPLOYEE,
          payload: id
        });
      } catch (error) {
        console.error("Error deleting employee:", error);
      }
    };
  };