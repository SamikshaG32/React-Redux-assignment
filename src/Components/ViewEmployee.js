import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import './ViewEmployee.css'; // You can create a separate CSS file for this

const ViewEmployee = () => {
  const { id } = useParams();
  const employees = useSelector((state) => state.employees.employees);
  const employee = employees.find((emp) => emp.id === parseInt(id));

  const navigate = useNavigate();

  useEffect(() => {
    if (!employee) { 
      navigate('/'); // If no employee found, redirect to the employee list page.
    }
  });

  return (
    <div className="view-employee-container">
      {employee ? (
        <div>
          <h2>Employee Details</h2>
          <div className="employee-detail">
            <div className="detail-item">
              <span className="detail-label">Name:</span>
              <span className="detail-value">{employee.name}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Email:</span>
              <span className="detail-value">{employee.email}</span>
            </div>
          </div>
          <div className="form-actions">
            <button type="button" onClick={() => navigate('/')} className="back-button">
              Back to List
            </button>
          </div>
        </div>
      ) : (
        <p>Employee not found</p>
      )}
    </div>
  );
};

export default ViewEmployee;
