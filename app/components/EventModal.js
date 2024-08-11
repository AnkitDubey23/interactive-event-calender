import React, { useState, useEffect } from "react";

export default function EventModal({
  selectedDate,
  event,
  onSave,
  onDelete,
  onClose,
}) {
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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">
          {event ? "Edit Event" : "Add Event"}
        </h2>
        <input
          type="text"
          placeholder="Event Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 rounded p-2 mb-4"
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
          >
            {event ? "Save" : "Add"}
          </button>
          {event && (
            <button
              onClick={() => {
                onDelete(event);
                onClose();
              }}
              className="bg-red-500 text-white rounded px-4 py-2 hover:bg-red-600"
            >
              Delete
            </button>
          )}
          <button
            onClick={onClose}
            className="bg-gray-300 rounded px-4 py-2 hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
