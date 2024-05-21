import React from 'react';
import './expenses.css';

const Expenses = () => {
  return (
    <div className="expenses-form">
      <h2>Expenses Form</h2>
      <form>
        <div className="form-group">
          <label htmlFor="empName">Employee Name:</label>
          <input type="text" id="empName" name="empName" />
        </div>
        <div className="form-group">
          <label htmlFor="designation">Designation:</label>
          <input type="text" id="designation" name="designation" />
        </div>
        <div className="form-group">
          <label htmlFor="eventDate">Event Date:</label>
          <input type="date" id="eventDate" name="eventDate" />
        </div>
        <div className="form-group">
          <label htmlFor="travelExpenses">Travel Expenses:</label>
          <input type="text" id="travelExpenses" name="travelExpenses" />
        </div>
        <div className="form-group">
          <label htmlFor="uploadBill">Upload Bill:</label>
          <input type="file" id="uploadBill" name="uploadBill" accept=".pdf,.jpg,.png" />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Expenses;
