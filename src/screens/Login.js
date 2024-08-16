import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendOtp } from "../services/api";

const Login = () => {
  const [countryCode, setCountryCode] = useState("91");
  const [mobileNumber, setMobileNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validatePhoneNumber = (number) => {
    // Simple validation: check if the number is 8-15 digits long
    const regex = /^[0-9]{8,15}$/;
    return regex.test(number);
  };

  const handleSendOtp = async () => {
    if (!validatePhoneNumber(mobileNumber)) {
      setError("Please enter a valid phone number.");
      return;
    }

    setLoading(true);
    try {
      const response = await sendOtp(countryCode, mobileNumber);
      console.log(response);
      setLoading(false);
      navigate("/otp-verification", { state: { countryCode, mobileNumber } });
    } catch (error) {
      setError("Failed to send OTP. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-6">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-extrabold uppercase tracking-tight">
            Train <span className="text-red-600">Anywhere</span> with{" "}
            <span className="text-red-600">Pros</span>
          </h1>
          <p className="text-gray-600 text-sm mt-2">
            Get trained at your place now
          </p>
        </div>
        <div className="mb-4">
          <div className="flex">
            <input
              type="text"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="w-16 p-2 border border-gray-300 rounded-l-md"
              placeholder="Code"
            />
            <input
              type="text"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded-r-md"
              placeholder="Phone Number"
            />
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
        <button
          onClick={handleSendOtp}
          disabled={loading}
          className="w-full bg-red-600 text-white font-bold py-2 px-4 rounded-md flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          {loading ? "Sending..." : "Login"}
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
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Login;
