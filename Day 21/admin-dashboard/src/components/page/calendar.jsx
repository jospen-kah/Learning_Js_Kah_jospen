import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
// import "./Calendar.css";
// import { Calendar } from 'lucide-react';



const Calendar = () => {
  const [events, setEvents] = useState([]);

  const handleDateClick = (info) => {
    const title = prompt('Enter Event Title:');
    if (title) {
      setEvents([...events, { title, start: info.dateStr }]);
    }
  };

  return (

    <div className="main-content">
      <div className='calendar'>
        <div className="calendar-header">
          <h2>Calendar</h2>
          {/* <div className="breadcrumbs">
          <a href="#">Home</a> / <a href="#">Plugins</a>
        </div> */}
        </div>
        <div className="calendar-container">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            dateClick={handleDateClick}
            events={events}
            headerToolbar={{
              left: 'prev,today,next',
              center: 'title',
              right: 'dayGridMonth,dayGridWeek,dayGridDay',
            }}
            // buttonText={{
            //   today: 'Today',
            //   month: 'Month',
            //   week: 'Week',
            //   day: 'Day',
            // }}
            height="auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;


