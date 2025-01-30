import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function EventCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={setDate}
        value={date}
      />
      <div className="mt-3">
        <h5>Selected Date: {date.toDateString()}</h5>
        <p>Events happening on this day:</p>
        <ul>
          <li>Charity Run</li>
          <li>Fundraising Dinner</li>
        </ul>
      </div>
    </div>
  );
}

export default EventCalendar;
