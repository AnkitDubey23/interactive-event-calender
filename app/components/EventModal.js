import React, { useState, useEffect } from "react";

export default function EventModal({ selectedDate, event, onSave, onDelete, onClose }) {
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (event) {
      setDescription(event.description);
    } else {
      setDescription("");
    }
  }, [event]);

  const handleSave = () => {
    onSave({ date: selectedDate, description });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{event ? "Edit Event" : "Add Event"}</h2>
        <input
          type="text"
          placeholder="Event Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleSave}>{event ? "Save" : "Add"}</button>
        {event && <button onClick={() => { onDelete(event); onClose(); }}>Delete</button>}
        <button onClick={onClose}>Cancel</button>
      </div>
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal {
          background: white;
          padding: 20px;
          border-radius: 10px;
          max-width: 400px;
          width: 100%;
          text-align: center;
        }
        input {
          margin-bottom: 10px;
          padding: 5px;
          width: 100%;
        }
        button {
          margin: 5px;
        }
      `}</style>
    </div>
  );
}
