import React from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const MyCalendar = () => {
  const events = [
    {
      title: 'Réunion importante',
      start: new Date(2023, 9, 23, 10, 0), // Date et heure de début
      end: new Date(2023, 9, 23, 12, 0), // Date et heure de fin
    },
    // Ajoutez d'autres événements ici
  ];

  return (
    <div>
      <h1>Calendrier</h1>
      <Calendar
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultDate={new Date()}
      />
    </div>
  );
};

export default MyCalendar;