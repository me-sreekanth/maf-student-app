import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Trainers = () => {
  const navigate = useNavigate();
  const [view, setView] = useState("myTrainers"); // Toggle between "myTrainers" and "allTrainers"
  const [searchTerm, setSearchTerm] = useState("");

  const myTrainers = [
    {
      name: "Takeru Segawa",
      rate: "3 / hour",
      totalSessions: 12,
      sex: "Male",
      age: "27",
      experience: "Advanced",
      schedule: [
        { day: "Tomorrow", time: "9AM - 10AM" },
        { day: "Thursday", time: "9AM - 10AM" },
        { day: "Friday", time: "Busy" },
      ],
    },
    {
      name: "Helena Padilla",
      rate: "2 / hour",
      totalSessions: 22,
      sex: "Female",
      age: "30",
      experience: "Intermediate",
      schedule: [
        { day: "Tomorrow", time: "9AM - 10AM" },
        { day: "Thursday", time: "9AM - 10AM" },
        { day: "Friday", time: "Busy" },
      ],
    },
    {
      name: "Singdam Kiatmoo9",
      rate: "2 / hour",
      totalSessions: 18,
      sex: "Male",
      age: "35",
      experience: "Professional",
      schedule: [
        { day: "Tomorrow", time: "9AM - 10AM" },
        { day: "Thursday", time: "9AM - 10AM" },
        { day: "Friday", time: "Busy" },
      ],
    },
  ];

  const allTrainers = myTrainers.filter((trainer) =>
    trainer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleTrainerClick = (trainer) => {
    navigate("/trainer-details", { state: { trainer } });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="flex justify-between items-center mb-4">
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
        <div className="flex items-center">
          <div className="flex items-center bg-gray-700 text-white px-3 py-1 rounded-md">
            <span className="mr-2">100</span>
            <button className="text-white text-lg">+</button>
          </div>
        </div>
      </header>

      <section className="mb-4">
        <div className="flex justify-between">
          <button
            onClick={() => setView("myTrainers")}
            className={`flex-1 border-2 ${
              view === "myTrainers" ? "border-red-500" : "border-gray-300"
            } p-4 rounded-md text-center`}
          >
            My Trainers
          </button>
          <button
            onClick={() => setView("allTrainers")}
            className={`flex-1 border-2 ${
              view === "allTrainers" ? "border-red-500" : "border-gray-300"
            } p-4 rounded-md text-center ml-4`}
          >
            All Trainers
          </button>
        </div>
      </section>

      {view === "allTrainers" && (
        <section className="mb-4">
          <input
            type="text"
            placeholder="Search Trainer"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border rounded-md"
          />
        </section>
      )}

      <section className="flex flex-col space-y-4">
        {(view === "myTrainers" ? myTrainers : allTrainers).map(
          (trainer, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col space-y-2 cursor-pointer"
              onClick={() => handleTrainerClick(trainer)}
            >
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-bold">{trainer.name}</h4>
                <span className="text-sm text-gray-500">{trainer.rate}</span>
              </div>
              <p className="text-gray-500">{trainer.experience}</p>
              <p className="text-gray-500">{trainer.sex}</p>
              <p className="text-gray-500">{trainer.age} years</p>
              <div className="mt-2">
                {trainer.schedule.map((slot, i) => (
                  <p key={i} className="text-gray-700">
                    {slot.day}: {slot.time}
                  </p>
                ))}
              </div>
            </div>
          )
        )}
      </section>
    </div>
  );
};

export default Trainers;
