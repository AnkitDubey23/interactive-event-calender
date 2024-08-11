import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format, addMonths, subMonths } from "date-fns";

export default function EventCalendar({ events, onDayClick }) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleDayClick = (date) => {
    onDayClick(date);
  };

  return (
    <div className="calendar-container">
      <Calendar
        onClickDay={handleDayClick}
        value={currentDate}
        tileContent={({ date, view }) => {
          if (view === "month") {
            const event = events.find(
              (event) =>
                format(new Date(event.date), "yyyy-MM-dd") ===
                format(date, "yyyy-MM-dd")
            );
            if (event) {
              const formattedDate = format(
                new Date(event.date),
                "MMMM d, yyyy"
              );

              return (
                <div aria-label={formattedDate} className="event-marker">
                  📅
                </div>
              );
            }
          }
          return null;
        }}
      />
      <style jsx>{`
        .calendar-container {
          width: 100%;
          max-width: 400px;
          margin: auto;
        }
        .calendar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
        .event-marker {
          text-align: center;
          font-size: 12px;
          color: red;
        }
      `}</style>
    </div>
  );
}
