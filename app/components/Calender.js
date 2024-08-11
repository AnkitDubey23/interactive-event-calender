import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";

export default function EventCalendar({ events, onDayClick }) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleDayClick = (date) => {
    onDayClick(date);
  };

  return (
    <div className="w-full max-w-sm mx-auto">
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
                <div
                  aria-label={formattedDate}
                  className="text-red-500 text-center text-xs"
                >
                  📅
                </div>
              );
            }
          }
          return null;
        }}
        className="shadow-lg rounded-lg"
      />
    </div>
  );
}
