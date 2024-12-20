import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../Redux/Actions/EmployeeActions';
import { useNavigate } from 'react-router-dom';
 
const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: ''
  });
 
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
    
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(addEmployee(employee));
    navigate('/');
    }
    
  };
 
  const handleCancel = () => {
    navigate('/');
  };

   // Validation function
   const validate = () => {
    const errors = {};

    // Name validation
    if (!employee.name) {
      errors.name = 'Name is required';
    } else if (/^\d+$/.test(employee.name)) {
      errors.name = 'Name cannot be numeric';
    }

    // Email validation
    if (!employee.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(employee.email)) {
      errors.email = 'Please enter a valid email address';
    }

    setErrors(errors);

    // Return false if there are any validation errors
    return Object.keys(errors).length === 0;
  };


  const resetData = () => {
    // const emp = {name: '', email:''}
    // setEmployee(emp);

    setEmployee({
      name: '',
      email: ''
    });
  };
 
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Add New Employee</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name</label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
          {errors.name && <div style={styles.error}>{errors.name}</div>}
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
          {errors.email && <div style={styles.error}>{errors.email}</div>}
        </div>
        <div style={styles.buttonGroup}>
          <button type="submit" style={styles.saveButton}>Save</button>
          <button type="button" onClick={handleCancel} style={styles.cancelButton}>
            Cancel
          </button>
          <button type="button" onClick={resetData} style={styles.cancelButton}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};
 
const styles = {
  container: {
    padding: '20px',
    margin: '0 auto',
    width: '400px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '5px',
    color: '#555',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '10px',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  saveButton: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '48%',
  },
  cancelButton: {
    padding: '10px 20px',
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '48%',
  },
};
 
export default AddEmployee;