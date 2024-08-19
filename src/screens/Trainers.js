import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import TrainerListItem from "../components/TrainerListItem"; // Import the TrainerListItem component

const Trainers = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [view, setView] = useState("myTrainers"); // Default to "myTrainers"
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const viewParam = queryParams.get("view");

    if (viewParam) {
      setView(viewParam);
    }
  }, [location.search]); // Depend on location.search to re-run if it changes

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
      imageUrl: require("../assets/trainer.png"),
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
      imageUrl: require("../assets/trainer.png"),
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
      imageUrl: require("../assets/trainer.png"),
    },
  ];

  const allTrainers = myTrainers.filter((trainer) =>
    trainer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedTrainers = view === "myTrainers" ? myTrainers : allTrainers;

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

      <h3 className="font-bold text-gray-800 mb-4 text-black">
        {/* Ensure the text is visible */}
        // {view === "myTrainers" ? "MY TRAINERS" : "ALL TRAINERS"}
      </h3>

      {view === "allTrainers" && (
        <section className="mb-4">
          <input
            type="text"
            placeholder="Search Trainer"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border rounded-md text-black bg-white"
            // Ensure visibility by setting text color and background
          />
        </section>
      )}

      <section className="flex flex-col space-y-4">
        {displayedTrainers.map((trainer, index) => (
          <TrainerListItem key={index} trainer={trainer} />
        ))}
      </section>
    </div>
  );
};

export default Trainers;
