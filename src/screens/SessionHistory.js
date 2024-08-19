import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SessionHistory = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Upcoming");

  const upcomingSessions = [
    {
      date: "AUG 12",
      time: "10:00 AM - 11:00 AM",
      trainer: "Takeru Segawa",
      sessionIn: "2d 4h 30m",
    },
    {
      date: "AUG 13",
      time: "9:00 AM - 10:00 AM",
      trainer: "Helena Padilla",
      sessionIn: "1d 6h 10m",
    },
  ];

  const completedSessions = [
    {
      date: "AUG 10",
      time: "9:00 AM - 10:00 AM",
      trainer: "Lazar Amigano",
    },
    {
      date: "AUG 09",
      time: "8:00 AM - 9:00 AM",
      trainer: "Sanchai Sor Kingstar",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="flex items-center mb-4">
        <button onClick={() => navigate(-1)} className="text-gray-500">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <h1 className="ml-4 text-2xl font-bold">Session History</h1>
      </header>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <nav className="flex justify-between mb-4">
          <button
            className={`font-bold ${
              activeTab === "Upcoming" ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setActiveTab("Upcoming")}
          >
            Upcoming
          </button>
          <button
            className={`font-bold ${
              activeTab === "Completed" ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setActiveTab("Completed")}
          >
            Completed
          </button>
        </nav>

        <div>
          {activeTab === "Upcoming" && (
            <div>
              {upcomingSessions.map((session, index) => (
                <div key={index} className="mb-4">
                  <div
                    className="bg-gray-50 p-4 rounded-lg shadow-sm cursor-pointer"
                    onClick={() =>
                      navigate("/session-details", { state: { session } })
                    }
                  >
                    <p className="text-gray-500">{session.date}</p>
                    <p className="text-lg font-bold">{session.trainer}</p>
                    <p className="text-gray-500">{session.time}</p>
                    <div className="bg-red-600 text-white text-sm px-2 py-1 mt-2 rounded-md">
                      Session starts in {session.sessionIn}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Completed" && (
            <div>
              {completedSessions.map((session, index) => (
                <div key={index} className="mb-4">
                  <div
                    className="bg-gray-50 p-4 rounded-lg shadow-sm cursor-pointer"
                    onClick={() =>
                      navigate("/session-details", { state: { session } })
                    }
                  >
                    <p className="text-gray-500">{session.date}</p>
                    <p className="text-lg font-bold">{session.trainer}</p>
                    <p className="text-gray-500">{session.time}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SessionHistory;
