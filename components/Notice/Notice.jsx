import React, { useState } from 'react';
import './Notice.css';

const Notice = () => {
  const [events] = useState([
    { id: 1, title: 'Fun Friday', description: 'Join us for a fun-filled evening with games and activities!', date: '2024-04-22' }, // Today's event
    { id: 2, title: 'Event 2', description: 'Description for Event 2', date: '2024-04-21' }, // Previous event
    { id: 3, title: 'Event 3', description: 'Description for Event 3', date: '2024-04-24' }, // Upcoming event
  ]);

  const today = new Date().toISOString().slice(0, 10);
  const tomorrow = new Date(Date.now() + 86400000).toISOString().slice(0, 10); // Adding one day in milliseconds

  const upcomingEvents = events.filter(event => event.date > today);
  const tomorrowEvents = events.filter(event => event.date === tomorrow);
  const previousEvents = events.filter(event => event.date < today);

  return (
    <div className="notice">
      <EventSection title="Upcoming Events" events={upcomingEvents} />
      <EventSection title="Tomorrow's Events" events={tomorrowEvents} />
      <EventSection title="Previous Events" events={previousEvents} />
    </div>
  );
};

const EventSection = ({ title, events }) => {
  return (
    <div className="event-section">
      <h2>{title}</h2>
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

const EventCard = ({ event }) => {
  const { title, description, date } = event;
  const eventDate = new Date(date);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const eventDateString = eventDate.toLocaleDateString(undefined, options);

  return (
    <div className="event-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Date: {eventDateString}</p>
      <p>Day: {eventDate.toLocaleDateString(undefined, { weekday: 'long' })}</p>
    </div>
  );
};

export default Notice;
