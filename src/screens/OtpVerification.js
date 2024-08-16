import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { validateOtp } from "../services/api";

const OtpVerification = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();
  const { countryCode, mobileNumber } = state || {};
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleOtpChange = (index, value) => {
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleVerifyOtp = async () => {
    const otpCode = otp.join("");
    if (otpCode.length !== 4) {
      setError("Please enter a 4-digit OTP");
      return;
    }

    setLoading(true);
    try {
      const response = await validateOtp(countryCode, mobileNumber, otpCode);
      console.log(response);
      setLoading(false);
      navigate("/basic-details1");
    } catch (error) {
      setError("Failed to verify OTP. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Enter OTP sent to
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          +{countryCode} {mobileNumber}
        </p>

        <div className="flex space-x-2 justify-center mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              ref={(el) => (inputRefs.current[index] = el)}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              className={`w-12 h-12 border-2 rounded-md text-center text-xl font-semibold ${
                error && digit === "" ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-red-500`}
            />
          ))}
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          onClick={handleVerifyOtp}
          disabled={loading}
          className="w-full bg-red-600 text-white font-bold py-2 px-4 rounded-md flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          {loading ? "Verifying..." : "Verify"}
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

export default OtpVerification;
