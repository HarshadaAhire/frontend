import React from 'react';
import './leaves.css'; // Import your CSS file

const Form = () => {
  return (
    <div className="leave-form-container">
      <h2>Apply for Leave</h2>
      <div className="form-container">
        <form className="leave-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="leave-type">Leave Type:</label>
            <select id="leave-type" name="leave-type">
              <option value="sick">Sick Leave</option>
              <option value="paid">Paid Leave</option>
              <option value="maternity">Maternity Leave</option>
              {/* Add other leave types */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="reason">Reason:</label>
            <textarea id="reason" name="reason" rows="4"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="start-date">Start Date:</label>
            <input type="date" id="start-date" name="start-date" />
          </div>
          <div className="form-group">
            <label htmlFor="end-date">End Date:</label>
            <input type="date" id="end-date" name="end-date" />
          </div>
          <button className="apply-button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
