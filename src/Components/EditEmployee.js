import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateEmployee } from '../Redux/Actions/EmployeeActions';
import { useParams, useNavigate } from 'react-router-dom';
import './EditEmployee.css'; 

const EditEmployee = () => {
  const { id } = useParams(); //to get url parameters
  const employees = useSelector((state) => state.employees.employees);
  const employee = employees.find((emp) => emp.id === parseInt(id));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //set default form data
  const [formData, setFormData] = useState({
    name: employee ? employee.name : '', //if emp then emp.name else default value
    email: employee ? employee.email : '',
  });

  useEffect(() => {
    if (employee) {
      setFormData({
        name: employee.name,
        email: employee.email,
      });
    }
  }, [employee]); // whenever emp wil updated, useEffect will call

  const handleChange = (e) => {
    const { name, value } = e.target; //dynamically created key i.e name for both name and email
    setFormData({ ...formData, [name]: value }); // setting updated data into formdata
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateEmployee({ ...employee, ...formData }));
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="edit-employee-container">
      <h2>Edit Employee</h2>
      <form onSubmit={handleSubmit} className="edit-employee-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="save-button">Save</button>
          <button type="button" onClick={handleCancel} className="cancel-button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
