import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees, deleteEmployee } from '../Redux/Actions/EmployeeActions';
import { Link } from 'react-router-dom';
import './DisplayAllEmployee.css';

const DisplayAllEmployee = () => {

    const dispatch = useDispatch();
    const employees = useSelector((state) => state.employees.employees);
  
    useEffect(() => {
      // dispatch(fetchEmployees());
      if(!employees.length) { // added this condition for keeping updated data and then display
        dispatch(fetchEmployees()); // dispatch async action
      }
    },[]);
    /* if not empty array - n time API call, [] - only on initial rendering, 
      [value] - useEffect will get call on every value change */

  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({
    key: 'name',  // default sort key (by name)
    direction: 'asc',  // default sort direction (ascending)
  });

  const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getSortArrow = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'asc' ? '↑' : '↓';
    }
    return '';
  };

  const sortedEmployees = employees
  .filter((emp) => emp.name.toLowerCase().includes(searchTerm.toLowerCase()))
  .sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  return (
    <div className="employee-page">
      <h1 className="employee-list-title">Employee List</h1>
      <div className="search-sort-section">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search employees..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
        <Link to="/add">
          <button className="add-employee-button">
            <i className="fa fa-plus"></i> Add Employee
          </button>
        </Link>
      </div>

      <table className="employee-table">
        <thead>
          <tr>
            <th onClick={() => handleSort('name')}>
              Name {getSortArrow('name')}
            </th>
            <th onClick={() => handleSort('email')}>
              Email {getSortArrow('email')}
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>
                <Link to={`/view/${employee.id}`}><button className="view-button">View</button></Link>
                <Link to={`/edit/${employee.id}`}><button className="update-button">Update</button></Link>
                <button className="delete-button" onClick={() => handleDelete(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayAllEmployee;