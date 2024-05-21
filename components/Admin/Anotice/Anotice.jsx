import React, { useState } from 'react';
import './Anotice.css'; // Import your CSS file for styling

// Individual Notice Component
const Notice = ({ notice, onDelete }) => {
  const { date, eventName, description } = notice;

  return (
    <div className="notice">
      <div className="notice-info">
        <h3>{eventName}</h3>
        <p>{description}</p>
        <p>Date: {date}</p>
      </div>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

// Noticeboard Component
const Anotice = () => {
  const [notices, setNotices] = useState([]);

  // Function to add a new notice
  const addNotice = (newNotice) => {
    setNotices([...notices, newNotice]);
  };

  // Function to delete a notice by index
  const deleteNotice = (index) => {
    const updatedNotices = notices.filter((_, i) => i !== index);
    setNotices(updatedNotices);
  };

  return (
    <div className="container">
      <div className="notice-form">
        <h2>Add Notice</h2>
        <NoticeForm addNotice={addNotice} />
      </div>
      <div className="noticeboard">
        <h2>Noticeboard</h2>
        <div className="notices">
          {notices.map((notice, index) => (
            <Notice
              key={index}
              notice={notice}
              onDelete={() => deleteNotice(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Form Component for Adding Notices
const NoticeForm = ({ addNotice }) => {
  const [date, setDate] = useState('');
  const [eventName, setEventName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNotice({ date, eventName, description });
    setDate('');
    setEventName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Event Name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Notice</button>
    </form>
  );
};

export default Anotice;
