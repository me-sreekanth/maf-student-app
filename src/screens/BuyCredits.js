import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackIcon from "../components/BackIcon";
import { PrimaryButton } from "../components/Button";
import { SingleInput } from "../components/InputComponents";
import BottomSheet from "../components/BottomSheet"; // Import the BottomSheet component

const BuyCredits = () => {
  const navigate = useNavigate();
  const [credits, setCredits] = useState(10);
  const [showBottomSheet, setShowBottomSheet] = useState(false); // State for showing the bottom sheet

  const creditCost = 30; // Assume each credit costs $30
  const totalCost = credits * creditCost;

  const handlePay = () => {
    // Show bottom sheet on PAY click
    setShowBottomSheet(true);
  };

  const handleCloseBottomSheet = () => {
    setShowBottomSheet(false);
    // Navigate to the appropriate screen after closing the sheet
    navigate("/explore-trainers");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 relative">
      <header className="flex items-center mb-4">
        <BackIcon />
      </header>

      <section className="mb-4">
        <h1 className="text-2xl font-bold mb-6">Buy Credits</h1>

        <div className="flex justify-center items-center mb-4">
          <button
            onClick={() => setCredits(credits - 1)}
            className="p-2 bg-[#EB2726] text-white rounded"
            disabled={credits <= 1}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 13H5V11H19V13Z" fill="white" />
            </svg>
          </button>
          <span className="text-xl mx-4">{credits}</span>
          <button
            onClick={() => setCredits(credits + 1)}
            className="p-2 bg-[#EB2726] text-white rounded"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                fill="white"
              />
            </svg>
          </button>
        </div>

        <SingleInput
          label="Select Credit Amount"
          options={[20, 50, 100, 250]}
          selected={credits}
          onSelect={(value) => setCredits(value)}
        />

        <div className="bg-yellow-100 p-4 rounded-md mb-4 flex justify-between items-center">
          <div className="flex items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                fill="#FFD700"
              />
            </svg>
            <span className="ml-2 font-bold">1 Credit = ${creditCost}</span>
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              fill="#FFD700"
            />
          </svg>
        </div>

        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-600">Total cost</p>
          <p className="text-xl font-bold">${totalCost}</p>
        </div>

        <PrimaryButton label={"PAY"} onClick={handlePay} />
      </section>

      {showBottomSheet && (
        <BottomSheet credits={credits} onClose={handleCloseBottomSheet} />
      )}
    </div>
  );
};

export default BuyCredits;
