import React from 'react';
import './Add.css'; // Import your CSS file for styling

const Add = () => {
  return (
    <div className="add-employee-container">
      <div className="profile-container">
        {/* Profile icon */}
        <img
          className="profile-icon"
          src="profile.png"
          alt="Profile Icon"
        />
      </div>
      <div className="form-container">
        {/* Employee Form */}
        <h2>Add Employee</h2>
        <form>
          <div className="form-group">
            <h5>Personal Details</h5>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="full-name">Full Name:</label>
                <input type="text" id="full-name" name="full-name" />
              </div>
              <div className="form-group">
                <label htmlFor="surname">Surname:</label>
                <input type="text" id="surname" name="surname" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="mobile-no">Mobile No:</label>
                <input type="tel" id="mobile-no" name="mobile-no" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address:</label>
                <input type="email" id="email" name="email" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <h5>Qualification</h5>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="qualification">Qualification:</label>
                <input type="text" id="qualification" name="qualification" />
              </div>
              <div className="form-group">
                <label htmlFor="passing-year">Passing Year:</label>
                <input type="number" id="passing-year" name="passing-year" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <h5>Admin Info</h5>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="doj">Date of Joining:</label>
                <input type="date" id="doj" name="doj" />
              </div>
              <div className="form-group">
                <label htmlFor="designation">Designation:</label>
                <input type="text" id="designation" name="designation" />
              </div>
              <div className="form-group">
                <label htmlFor="department">Department:</label>
                <input type="text" id="department" name="department" />
              </div>
            </div>
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
