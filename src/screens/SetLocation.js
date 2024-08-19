import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SetLocation = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState(null);

  const handleConfirmLocation = () => {
    if (location) {
      navigate("/add-address", {
        state: { location },
      });
    }
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

      <section className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Select Location
        </h1>
        <input
          type="text"
          placeholder="Enter Pincode, City or Location"
          className="mb-4 p-3 w-full border rounded-md"
          // handle location input
        />
        <div className="h-64 bg-gray-300 rounded-md mb-4">
          {/* Google Maps integration here */}
        </div>
        <button
          className="text-red-600 flex items-center mb-6"
          onClick={() => setLocation(true)}
        >
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
              d="M12 4v16m8-8H4"
            ></path>
          </svg>
          Set My Current Location
        </button>
      </section>

      <footer className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <button
          onClick={handleConfirmLocation}
          className="w-full bg-red-600 text-white font-bold py-3 px-4 rounded-md flex items-center justify-center focus:outline-none"
          disabled={!location}
        >
          Add Address
          <svg
            className="w-5 h-5 ml-2 -mr-1"
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
      </footer>
    </div>
  );
};

export default SetLocation;
