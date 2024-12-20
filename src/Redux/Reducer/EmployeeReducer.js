import { FETCH_EMPLOYEES, ADD_EMPLOYEE, UPDATE_EMPLOYEE, DELETE_EMPLOYEE } from '../Actions/ActionTypes';

const initialState = {
    employees : []
}

const employeeReducer = (state= initialState, action) => {
    switch (action.type) {
        case FETCH_EMPLOYEES:
            return {
                ...state,
                employees: action.payload
            };

        case ADD_EMPLOYEE:
            return {
                ...state,
                employees: [...state.employees, action.payload], // Add the new employee to the list
            };

        case UPDATE_EMPLOYEE:
        return {
            ...state,
            employees: state.employees.map((emp) =>
            emp.id === action.payload.id ? action.payload : emp
            )
        };

        case DELETE_EMPLOYEE:
        return {
            ...state,
            employees: state.employees.filter((emp) => emp.id !== action.payload),
        };

        default:
            return state;
    }
}

export default employeeReducer;