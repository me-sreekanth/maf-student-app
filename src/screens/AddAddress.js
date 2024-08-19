import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddAddress = () => {
  const [name, setName] = useState("");
  const [addressType, setAddressType] = useState("");
  const [showAddressTypeSheet, setShowAddressTypeSheet] = useState(false);
  const [flatDetails, setFlatDetails] = useState("");
  const [landmark, setLandmark] = useState("");
  const navigate = useNavigate();

  const handleSaveAddress = () => {
    // Save the address logic here
    navigate("/select-address");
  };

  const handleAddressTypeSelect = (type) => {
    setAddressType(type);
    setShowAddressTypeSheet(false);
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

      <section>
        <h1 className="text-2xl font-bold mb-6">Add Address</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Name of Address
          </label>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Address Type
          </label>
          <input
            type="text"
            placeholder="Select Address Type"
            value={addressType}
            onClick={() => setShowAddressTypeSheet(true)}
            readOnly
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Flat / House no / Floor / Building
          </label>
          <input
            type="text"
            placeholder="Enter details"
            value={flatDetails}
            onChange={(e) => setFlatDetails(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Nearby Landmark
          </label>
          <input
            type="text"
            placeholder="Enter landmark"
            value={landmark}
            onChange={(e) => setLandmark(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
      </section>

      <footer className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <button
          onClick={handleSaveAddress}
          className="w-full bg-red-600 text-white font-bold py-3 px-4 rounded-md flex items-center justify-center focus:outline-none"
        >
          Save Address
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

      {showAddressTypeSheet && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end">
          <div className="bg-white w-full rounded-t-lg p-4">
            <h3 className="text-lg font-bold text-gray-700 mb-2">
              Select Address Type
            </h3>
            {[
              "Public Property",
              "Park",
              "My own house",
              "Friends house",
              "Hotel",
              "Others",
            ].map((type) => (
              <div
                key={type}
                className="py-2 px-4 border-t border-gray-200 cursor-pointer"
                onClick={() => handleAddressTypeSelect(type)}
              >
                {type}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AddAddress;
