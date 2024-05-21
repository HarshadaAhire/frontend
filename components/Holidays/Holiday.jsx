// HolidayScreen.js
import React from 'react';
import './Holidays.css'; // Import CSS file for styling

const holidays = [
  { name: 'New Year\'s Day', date: 'January 1', year: '2024' },
  { name: 'Valentine\'s Day', date: 'February 14', year: '2024' },
  { name: 'St. Patrick\'s Day', date: 'March 17', year: '2024' },
  { name: 'Easter Sunday', date: 'April 4', year: '2024' },
  { name: 'Mother\'s Day', date: 'May 9', year: '2024' },
  { name: 'Memorial Day', date: 'May 31', year: '2024' },
  { name: 'Father\'s Day', date: 'June 20', year: '2024' },
  { name: 'Independence Day', date: 'July 4', year: '2024' },
  { name: 'Labor Day', date: 'September 6', year: '2024' },
  { name: 'Halloween', date: 'October 31', year: '2024' },
  { name: 'Thanksgiving', date: 'November 25', year: '2024' },
  { name: 'Christmas Day', date: 'December 25', year: '2024' }
];

const colors = ['#FFC0CB', '#ADD8E6', '#FFA07A', '#98FB98', '#FFD700', '#c99090', '#20B2AA', '#FF6347', '#7B68EE', '#90EE90', '#FF69B4', '#AFEEEE'];

const Holiday = () => {
  return (
    <div className="holiday-screen">
      <h1 className="h1">Holidays List</h1>
      <div className="holiday-container">
        {holidays.map((holiday, index) => (
          <div className="holiday-card" key={index} style={{ backgroundColor: colors[index] }}>
            <h2>{holiday.name}</h2>
            <div className="date-container">
              <p>{holiday.date}</p>
              <p>{holiday.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Holiday;
