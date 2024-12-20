import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import employeeReducer from './Reducer/EmployeeReducer';


// to combine multiple reducers
const allReducers = combineReducers({
    employees: employeeReducer
})

const store = configureStore({
    reducer: allReducers
})
//here thunk middleware is configured by default
// in createStore need tp pass other parameter as applyMiddleware(thunk)
export default store;