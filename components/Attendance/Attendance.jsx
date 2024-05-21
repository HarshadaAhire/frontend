import React, { useState } from 'react';
import './Attendance.css';

const Attendance = () => {
  const [date, setDate] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [location, setLocation] = useState('');
  const [selfie, setSelfie] = useState(null);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimestampChange = (e) => {
    setTimestamp(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSelfieChange = (e) => {
    const file = e.target.files[0];
    setSelfie(file);
  };

  const handleSubmit = () => {
    // Add logic to handle submission
  };

  return (
    <div className="attendance-screen">
      <div className="profile-container">
        <div className="profile-photo"></div>
        <div className="emp-name">Aman Sharma</div>
        <div className="designation">Web Developer</div>
      </div>
      <div className="attendance-details">
        <h2>Punch IN </h2>
        <div className="input-row">
          <div className="input-group">
            <label>Date:</label>
            <input type="text" value={date} onChange={handleDateChange} />
          </div>
          <div className="input-group">
            <label>Timestamp:</label>
            <input type="text" value={timestamp} onChange={handleTimestampChange} />
          </div>
          <div className="input-group">
            <label>Location:</label>
            <input type="text" value={location} onChange={handleLocationChange} />
          </div>
          <div className="input-group">
            <label>Selfie:</label>
            <input type="file" accept="image/*" capture="camera" onChange={handleSelfieChange} />
          </div>
          <button className="button-group" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
