import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TimePicker from "./TimePicker"; // Make sure this path is correct
import BackIcon from "../components/BackIcon";

const SessionDuration = () => {
  const navigate = useNavigate();
  const [startTime, setStartTime] = useState("9:00 AM");
  const [endTime, setEndTime] = useState("10:30 AM");
  const [sessionDuration, setSessionDuration] = useState(90); // Duration in minutes
  const [notes, setNotes] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [pickerType, setPickerType] = useState("start");

  const handleTimeChange = (newTime) => {
    if (pickerType === "start") {
      setStartTime(newTime);
    } else if (pickerType === "end") {
      setEndTime(newTime);
    }
    setShowTimePicker(false);
    // Optionally, recalculate the session duration here
  };

  const handleBookNow = () => {
    if (agreed) {
      navigate("/buy-credits");
    } else {
      alert("You must agree to the terms and conditions");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="flex justify-between items-center mb-4">
        <BackIcon />
        <div className="flex items-center">
          <div className="flex items-center bg-gray-700 text-white px-3 py-1 rounded-md">
            <span className="mr-2">100</span>
            <button className="text-white text-lg">+</button>
          </div>
        </div>
      </header>

      <section>
        <h1 className="text-2xl font-bold mb-4">Session Duration</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Start Time
          </label>
          <input
            type="text"
            value={startTime}
            onClick={() => {
              setPickerType("start");
              setShowTimePicker(true);
            }}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            End Time
          </label>
          <input
            type="text"
            value={endTime}
            onClick={() => {
              setPickerType("end");
              setShowTimePicker(true);
            }}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>

        <div className="mb-4">
          <div className="flex items-center">
            <button
              onClick={() => setSessionDuration(sessionDuration - 30)}
              className="p-2 rounded bg-red-600 text-white"
              disabled={sessionDuration <= 30}
            >
              -
            </button>
            <span className="mx-4">{sessionDuration} mins Session</span>
            <button
              onClick={() => setSessionDuration(sessionDuration + 30)}
              className="p-2 rounded bg-red-600 text-white"
            >
              +
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Notes to Trainer
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Would like to train kicks and some cardio..."
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              className="form-checkbox text-red-600"
            />
            <span className="ml-2">
              I agree with FitAny{" "}
              <a href="#" className="text-red-600">
                Terms and policies
              </a>
              . And I shall be respectful towards my trainer.
            </span>
          </label>
        </div>

        <div className="flex justify-between items-center mt-6">
          <span className="text-lg">
            Total Credits <span className="text-yellow-500">200</span>
          </span>
          <button
            onClick={handleBookNow}
            className="bg-red-600 text-white py-2 px-4 rounded-md flex items-center"
          >
            BOOK NOW
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </section>

      {showTimePicker && (
        <TimePicker
          onConfirm={handleTimeChange}
          onClose={() => setShowTimePicker(false)}
        />
      )}
    </div>
  );
};

export default SessionDuration;
