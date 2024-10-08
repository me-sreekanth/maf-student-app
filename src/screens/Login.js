import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendOtp } from "../services/api";
import LoginAnimatedHeader from "../components/LoginAnimatedHeader";
import PhoneNumber from "../components/PhoneNumber";
import Checkbox from "../components/Checkbox";
import { PrimaryButton } from "../components/Button";
import SpannedText from "../components/SpannedText";
import styled from "styled-components";

const HeaderText = styled.h1`
  font-family: "Manrope", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  color: #000000;
  margin-bottom: 20px;
  margin-top: 40px;
`;

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

  const handleInputChange = (e) => {
    setMobileNumber(e.target.value);
    if (error) {
      setError(""); // Clear error when user starts typing
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-900">
      <LoginAnimatedHeader />

      <HeaderText>Get trained at your place now</HeaderText>

      <div className="mb-8">
        <PhoneNumber
          onChange={handleInputChange}
          onFocus={() => setError("")} // Clear error when input is focused
          countryCode={`+${countryCode}`}
        />

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <Checkbox />
      </div>

      <PrimaryButton
        label={loading ? "SENDING..." : "LOGIN"}
        onClick={handleSendOtp}
      />

      <SpannedText />
    </div>
  );
};

export default Login;
