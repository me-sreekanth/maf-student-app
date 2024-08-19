import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

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

  const trainers = [
    {
      name: "Helena Padilla",
      rate: "3 / hour",
      schedule: [
        { day: "Tomorrow", time: "9AM - 10AM" },
        { day: "Thursday", time: "9AM - 10AM" },
        { day: "Friday", time: "Busy" },
      ],
    },
    {
      name: "Takeru Segawa",
      rate: "2 / hour",
      schedule: [
        { day: "Tomorrow", time: "10AM - 11AM" },
        { day: "Thursday", time: "10AM - 11AM" },
        { day: "Friday", time: "Busy" },
      ],
    },
  ];

  const completedSessions = [
    {
      date: "AUG 12",
      time: "10:00 AM - 11:00 AM",
      trainer: "Lazar Amigano",
    },
    {
      date: "AUG 11",
      time: "9:00 AM - 10:00 AM",
      trainer: "Takeru Segawa",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center">
            <img
              src="/path/to/profile-pic.png"
              alt="Profile"
              className="rounded-full"
            />
          </div>
          <div className="ml-2">
            <h2 className="text-lg font-bold">Ryuki</h2>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center bg-gray-700 text-white px-3 py-1 rounded-md">
            <span className="mr-2">100</span>
            <button className="text-white text-lg">+</button>
          </div>
        </div>
      </header>

      <section className="mb-4">
        <h2 className="text-3xl font-bold text-red-600">12 Sessions</h2>
        <p className="text-gray-500">in last 30 days</p>
      </section>

      <section className="mb-4">
        <h3 className="font-bold text-gray-800 mb-2">// Upcoming Sessions</h3>
        <div className="flex overflow-x-scroll space-x-4">
          {upcomingSessions.map((session, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-60 bg-white p-4 rounded-lg shadow-md"
            >
              <p className="text-gray-500">{session.date}</p>
              <p className="text-lg font-bold">{session.trainer}</p>
              <p className="text-gray-500">{session.time}</p>
              <p className="text-red-600 mt-2">{session.sessionIn}</p>
            </div>
          ))}
        </div>
        <button
          className="mt-2 text-red-600 flex items-center"
          onClick={() => navigate("/session-history")}
        >
          View All
          <svg
            className="w-5 h-5 ml-1"
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
      </section>

      <section className="mb-4">
        <h3 className="font-bold text-gray-800 mb-2">// Explore Trainers</h3>
        <div className="flex overflow-x-scroll space-x-4">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-60 bg-white p-4 rounded-lg shadow-md"
            >
              <img
                src="/path/to/trainer-pic.png"
                alt={trainer.name}
                className="w-full h-32 object-cover rounded-lg"
              />
              <h4 className="text-lg font-bold mt-2">{trainer.name}</h4>
              <p className="text-gray-500">{trainer.rate}</p>
              <div className="mt-2">
                {trainer.schedule.map((slot, i) => (
                  <p key={i} className="text-gray-700">
                    {slot.day}: {slot.time}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          className="mt-2 text-red-600 flex items-center"
          onClick={() => navigate("/explore-trainers")}
        >
          Explore All
          <svg
            className="w-5 h-5 ml-1"
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
      </section>

      <section className="mb-4">
        <h3 className="font-bold text-gray-800 mb-2">// Completed Sessions</h3>
        <div className="flex overflow-x-scroll space-x-4">
          {completedSessions.map((session, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-60 bg-white p-4 rounded-lg shadow-md"
            >
              <p className="text-gray-500">{session.date}</p>
              <p className="text-lg font-bold">{session.trainer}</p>
              <p className="text-gray-500">{session.time}</p>
            </div>
          ))}
        </div>
        <button className="mt-2 text-red-600 flex items-center">
          View All
          <svg
            className="w-5 h-5 ml-1"
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
      </section>

      <footer className="mt-6">
        <p className="text-gray-400 font-bold text-center">
          Good Teachers Matter
        </p>
        <button className="flex items-center justify-center w-full mt-4 text-red-600">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 7l-2 2-2-2m0 6l2-2 2 2m2 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-8a2 2 0 00-2 2v10a2 2 0 002 2h8"
            ></path>
          </svg>
          Talk with us
        </button>
      </footer>
    </div>
  );
};

export default Home;
