import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BuyCredits = () => {
  const navigate = useNavigate();
  const [credits, setCredits] = useState(10);
  const [showPopup, setShowPopup] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);

  const creditCost = 30; // Assume each credit costs $30
  const totalCost = credits * creditCost;

  const handlePayAndBook = () => {
    // Randomly decide whether the payment is successful or not
    const paymentSuccess = Math.random() > 0.5;
    setIsSuccess(paymentSuccess);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    if (isSuccess) {
      // Navigate to a different page or reset as needed after success
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 relative">
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
        <h1 className="text-2xl font-bold mb-4">Buy Credits</h1>
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => setCredits(credits - 1)}
              className="p-2 bg-red-600 text-white rounded"
              disabled={credits <= 1}
            >
              -
            </button>
            <span className="text-2xl">{credits}</span>
            <button
              onClick={() => setCredits(credits + 1)}
              className="p-2 bg-red-600 text-white rounded"
            >
              +
            </button>
          </div>
        </div>

        <div className="mb-4">
          <p>1 Credit = ${creditCost}</p>
        </div>

        <div className="mb-4">
          <p>Total cost: ${totalCost}</p>
        </div>

        <button
          onClick={handlePayAndBook}
          className="w-full bg-red-600 text-white py-2 rounded-md flex justify-center items-center"
        >
          PAY AND BOOK
        </button>
      </section>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md text-center w-80">
            {isSuccess ? (
              <>
                <svg
                  className="w-16 h-16 text-green-600 mb-4 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <h2 className="text-2xl font-bold mb-4">Booked Successfully</h2>
                <p className="text-gray-700 mb-2">
                  Aug 12, 10:00 AM - 11:00 AM
                </p>
                <p className="text-gray-700 mb-4">Lazar Amigano</p>
                <p className="text-gray-500">Home</p>
                <p className="text-gray-500 mb-4">
                  Building no 356, 3rd floor, 29th street
                </p>
                <button
                  onClick={handleClosePopup}
                  className="bg-red-600 text-white py-2 px-6 rounded-md"
                >
                  MESSAGE TRAINER
                </button>
              </>
            ) : (
              <>
                <svg
                  className="w-16 h-16 text-red-600 mb-4 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
                <h2 className="text-2xl font-bold mb-4">
                  Oops! Payment Failed
                </h2>
                <button
                  onClick={() => setShowPopup(false)}
                  className="bg-red-600 text-white py-2 px-6 rounded-md mb-4"
                >
                  RETRY
                </button>
                <button
                  onClick={() => navigate("/support")}
                  className="bg-gray-200 text-gray-700 py-2 px-6 rounded-md"
                >
                  CONTACT SUPPORT
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BuyCredits;
