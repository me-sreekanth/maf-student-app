import React, { useState } from "react";

const TimePicker = ({ onConfirm, onClose }) => {
  const [time, setTime] = useState("09:00 AM");

  const handleConfirm = () => {
    onConfirm(time);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow-lg w-64">
        <h2 className="text-lg font-bold mb-4">Select Time</h2>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="block w-full mb-4 p-2 border rounded"
        />
        <div className="flex justify-between">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimePicker;
