"use client";

import React, { useState } from "react";
import EventCalendar from "./components/Calender";
import EventModal from "./components/EventModal";

export default function Home() {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleDayClick = (date) => {
    const event = events.find(
      (e) => new Date(e.date).toDateString() === date.toDateString()
    );
    setSelectedDate(date);
    setSelectedEvent(event);
  };

  // const handleSaveEvent = (event) => {
  //   setEvents((prevEvents) => {
  //     const eventExists = prevEvents.find((e) => e.id === event.id);

  //     if (eventExists) {
  //       return prevEvents.map((e) =>
  //         e.id === event.id ? { ...e, ...event } : e
  //       );
  //     } else {
  //       return [...prevEvents, { ...event, id: Date.now() }];
  //     }
  //   });
  //   setSelectedEvent(null);
  //   setSelectedDate(null);
  // };

  // const handleSaveEvent = (event) => {
  //   setEvents((prevEvents) => {
  //     const eventExists = prevEvents.find((e) => e.id === event.id);
  
  //     if (eventExists) {
  //       // Update existing event without changing its ID
  //       return prevEvents.map((e) =>
  //         e.id === event.id ? { ...e, ...event } : e
  //       );
  //     } else {
  //       // Add new event and generate a new ID
  //       return [...prevEvents, { ...event, id: event.id || Date.now() }];
  //     }
  //   });
  
  //   setSelectedEvent(null);
  //   setSelectedDate(null);
  // };
  
  
  // const handleDeleteEvent = (eventToDelete) => {
  //   console.log("Deleting event:", eventToDelete);
  //   setEvents(events.filter((event) => event.id !== eventToDelete.id));
  //   setSelectedEvent(null);
  //   setSelectedDate(null);
  // };

  const handleSaveEvent = (event) => {
    console.log("Attempting to save event:", event);
  
    setEvents((prevEvents) => {
      const eventExists = prevEvents.find((e) => e.id === event.id);
  
      if (eventExists) {
        console.log("Updating existing event:", event);
        return prevEvents.map((e) =>
          e.id === event.id ? { ...e, ...event } : e
        );
      } else {
        const newEvent = { ...event, id: event.id || Date.now() };
        console.log("Creating new event:", newEvent);
        return [...prevEvents, newEvent];
      }
    });
  
    setSelectedEvent(null);
    setSelectedDate(null);
  };
  
  const handleDeleteEvent = (eventToDelete) => {
    console.log("Deleting event:", eventToDelete);
  
    setEvents((prevEvents) =>
      prevEvents.filter((event) => event.id !== eventToDelete.id)
    );
  
    setSelectedEvent(null);
    setSelectedDate(null);
  };
  


  const closeModal = () => {
    setSelectedDate(null);
    setSelectedEvent(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Event Scheduler</h1>
      <EventCalendar events={events} onDayClick={handleDayClick} />
      {selectedDate && (
        <EventModal
          selectedDate={selectedDate}
          event={selectedEvent}
          onSave={handleSaveEvent}
          onDelete={handleDeleteEvent}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
