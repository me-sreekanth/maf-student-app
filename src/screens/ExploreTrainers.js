import React from "react";
import { useNavigate } from "react-router-dom";

const ExploreTrainers = () => {
  const navigate = useNavigate();

  const topTrainers = [
    {
      name: "Singdam Kiatmoo9",
      rate: "3 / hour",
      availableDays: [
        { day: "Tomorrow", time: "9AM - 10AM" },
        { day: "Thursday", time: "9AM - 10AM" },
        { day: "Friday", time: "Busy" },
      ],
    },
    {
      name: "Helena Padilla",
      rate: "3 / hour",
      availableDays: [
        { day: "Tomorrow", time: "9AM - 10AM" },
        { day: "Thursday", time: "9AM - 10AM" },
        { day: "Friday", time: "Busy" },
      ],
    },
  ];

  const availableTrainers = [
    {
      date: "AUG 12",
      name: "Helena Padilla",
      rate: "3 / hour",
      gender: "27F",
    },
    {
      date: "AUG 13",
      name: "Takeru Segawa",
      rate: "4 / hour",
      gender: "27M",
    },
  ];

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
            onClick={() => navigate("/trainers?view=myTrainers")}
            className="flex-1 border-2 border-gray-300 p-4 rounded-md text-center"
          >
            ❤️ My Trainers
          </button>
          <button
            onClick={() => navigate("/trainers?view=allTrainers")}
            className="flex-1 border-2 border-gray-300 p-4 rounded-md text-center ml-4"
          >
            ⭐ All Trainers
          </button>
        </div>
      </section>

      <section className="mb-4">
        <h3 className="font-bold text-gray-800 mb-2">// Top Trainers</h3>
        <div className="flex overflow-x-scroll space-x-4">
          {topTrainers.map((trainer, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-60 bg-white p-4 rounded-lg shadow-md"
            >
              <img
                src={require("../assets/trainer.png")}
                alt={trainer.name}
                className="w-full h-32 object-cover rounded-lg"
              />
              <h4 className="text-lg font-bold mt-2">{trainer.name}</h4>
              <p className="text-gray-500">{trainer.rate}</p>
              <div className="mt-2">
                {trainer.availableDays.map((slot, i) => (
                  <p key={i} className="text-gray-700">
                    {slot.day}: {slot.time}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-4">
        <h3 className="font-bold text-gray-800 mb-2">// Available Trainers</h3>
        <div className="flex flex-wrap -mx-2">
          {availableTrainers.map((trainer, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="text-gray-500">{trainer.date}</p>
                <img
                  src={require("../assets/trainer.png")}
                  alt={trainer.name}
                  className="w-full h-32 object-cover rounded-lg"
                />
                <h4 className="text-lg font-bold mt-2">{trainer.name}</h4>
                <p className="text-gray-500">
                  {trainer.rate} • {trainer.gender}
                </p>
                <div className="mt-2 flex justify-between">
                  <button className="text-sm bg-gray-200 px-3 py-1 rounded">
                    9AM - 10AM
                  </button>
                  <button className="text-sm bg-gray-200 px-3 py-1 rounded">
                    10AM - 11AM
                  </button>
                  <button className="text-sm bg-gray-200 px-3 py-1 rounded">
                    11AM - 12PM
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExploreTrainers;
