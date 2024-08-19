import React from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "../components/Button";

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
      <header className="relative h-60 bg-gradient-to-b from-[#3A3A3A] to-[#252525] rounded-md mb-6 overflow-hidden">
        <div className="flex justify-between items-center p-4 relative z-10">
          <div
            onClick={() => navigate("/profile")}
            className="flex items-center"
          >
            <div className="h-12 w-12">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Profile Icon SVG */}
                <rect x="0.5" y="0.5" width="35" height="35" fill="#252525" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="35"
                  height="35"
                  fill="black"
                  fillOpacity="0.2"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="35"
                  height="35"
                  fill="black"
                  fillOpacity="0.2"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="35"
                  height="35"
                  fill="black"
                  fillOpacity="0.2"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="35"
                  height="35"
                  fill="black"
                  fillOpacity="0.2"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="35"
                  height="35"
                  fill="black"
                  fillOpacity="0.2"
                />
                <rect x="0.5" y="0.5" width="35" height="35" stroke="#727272" />
                <path
                  d="M18 21C11 21 7.5 24 7.5 24V28.5H28.5V24C28.5 24 25 21 18 21Z"
                  stroke="#B0B0B0"
                  strokeWidth="2"
                />
                <path
                  d="M23 12.5C23 15.2614 20.7614 17.5 18 17.5C15.2386 17.5 13 15.2614 13 12.5C13 9.73858 15.2386 7.5 18 7.5C20.7614 7.5 23 9.73858 23 12.5Z"
                  stroke="#B0B0B0"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="ml-2 text-white">
              <h2 className="text-lg font-bold">Ryuki</h2>
            </div>
          </div>
          <div className="flex items-center bg-black rounded-md overflow-hidden">
            <div className="flex items-center bg-black text-white px-2 py-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.17657 11.0585H1L11.3812 0H13.6188L10.7647 6.21159H14L3.6188 16H1.38121L4.17657 11.0585Z"
                  fill="#FFD700"
                />
              </svg>
              <span className="ml-2">100</span>
            </div>
            <button
              onClick={() => navigate("/credits")}
              className="bg-[#EB2726] text-white px-2 py-1 flex items-center justify-center"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 0V12M0 6H12" stroke="white" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 p-4 z-20">
          <h2 className="text-3xl font-bold text-[#EB2726]">12</h2>
          <p className="text-lg font-bold text-white">SESSIONS</p>
          <p className="text-gray-300">in last 30 days</p>
        </div>
        <div className="absolute top-0 right-0 opacity-50 pointer-events-none z-0">
          <svg
            width="157"
            height="213"
            viewBox="0 0 157 213"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M63.4118 143.818H2L119.706 0H145.294L114.588 82.1818H176L58.2941 226H32.7059L63.4118 143.818Z"
              fill="url(#paint0_linear_1725_518)"
              stroke="url(#paint1_linear_1725_518)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1725_518"
                x1="89"
                y1="0"
                x2="89"
                y2="226"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#353535" />
                <stop offset="0.5" stopColor="#363636" />
                <stop offset="1" stopColor="#282828" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1725_518"
                x1="89"
                y1="0"
                x2="77.8668"
                y2="191.929"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#333333" stopOpacity="0.12" />
                <stop offset="0.5" stopColor="#3F3E3E" />
                <stop offset="1" stopColor="#333333" stopOpacity="0.12" />
              </linearGradient>
            </defs>
          </svg>
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
        <SecondaryButton
          label="VIEW ALL"
          onClick={() => navigate("/session-history")}
        />
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
        <SecondaryButton
          label="EXPLORE ALL"
          onClick={() => navigate("/explore-trainers")}
        />
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
        <SecondaryButton
          label="VIEW ALL"
          onClick={() => navigate("/completed-sessions")}
        />
      </section>

      <footer className="mt-6">
        <p className="text-gray-400 font-bold text-center">
          Good Teachers Matter
        </p>
        <SecondaryButton
          label="Talk with us"
          onClick={() => navigate("/contact")}
        />
      </footer>
    </div>
  );
};

export default Home;
