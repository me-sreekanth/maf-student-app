import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditProfileScreen = () => {
  const navigate = useNavigate();

  const [experience, setExperience] = useState("Beginner");
  const [age, setAge] = useState(20);
  const [gender, setGender] = useState("M");
  const [hasGloves, setHasGloves] = useState(true);
  const [gloveSize, setGloveSize] = useState(8);
  const [hasHandwraps, setHasHandwraps] = useState(true);

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
      </header>

      <section>
        <h1 className="text-2xl font-bold mb-6">Edit Profile</h1>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">YOUR NAME</label>
          <input
            type="text"
            value="Ryuki"
            className="w-full p-3 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">
            YOUR MAUY THAI EXPERIENCE
          </label>
          <div className="flex space-x-4">
            {["Beginner", "Intermediate", "Professional"].map((level) => (
              <button
                key={level}
                onClick={() => setExperience(level)}
                className={`flex-1 p-4 rounded-md text-center ${
                  experience === level
                    ? "border-2 border-red-500"
                    : "border border-gray-300"
                }`}
              >
                <span className={experience === level ? "text-red-600" : ""}>
                  {level}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex space-x-4 mb-4">
          <div className="flex-1">
            <label className="block text-sm font-bold mb-2">
              HOW OLD ARE YOU?
            </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full p-3 border rounded-md"
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm font-bold mb-2">YOUR GENDER</label>
            <div className="flex space-x-4">
              {["M", "F"].map((g) => (
                <button
                  key={g}
                  onClick={() => setGender(g)}
                  className={`flex-1 p-4 rounded-md text-center ${
                    gender === g
                      ? "border-2 border-red-500"
                      : "border border-gray-300"
                  }`}
                >
                  <span className={gender === g ? "text-red-600" : ""}>
                    {g}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">
            DO YOU HAVE GLOVES
          </label>
          <div className="flex space-x-4">
            {["Yes", "No"].map((option) => (
              <button
                key={option}
                onClick={() => setHasGloves(option === "Yes")}
                className={`flex-1 p-4 rounded-md text-center ${
                  (hasGloves && option === "Yes") ||
                  (!hasGloves && option === "No")
                    ? "border-2 border-red-500"
                    : "border border-gray-300"
                }`}
              >
                <span
                  className={
                    (hasGloves && option === "Yes") ||
                    (!hasGloves && option === "No")
                      ? "text-red-600"
                      : ""
                  }
                >
                  {option}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">
            YOUR GLOVE SIZE (IN OZ)
          </label>
          <div className="flex space-x-2">
            {[8, 10, 12, 14, 16, 18].map((size) => (
              <button
                key={size}
                onClick={() => setGloveSize(size)}
                className={`flex-1 p-4 rounded-md text-center ${
                  gloveSize === size
                    ? "border-2 border-red-500"
                    : "border border-gray-300"
                }`}
              >
                <span className={gloveSize === size ? "text-red-600" : ""}>
                  {size}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-sm font-bold mb-2">
            DO YOU HAVE HANDWRAPS
          </label>
          <div className="flex space-x-4">
            {["Yes", "No"].map((option) => (
              <button
                key={option}
                onClick={() => setHasHandwraps(option === "Yes")}
                className={`flex-1 p-4 rounded-md text-center ${
                  (hasHandwraps && option === "Yes") ||
                  (!hasHandwraps && option === "No")
                    ? "border-2 border-red-500"
                    : "border border-gray-300"
                }`}
              >
                <span
                  className={
                    (hasHandwraps && option === "Yes") ||
                    (!hasHandwraps && option === "No")
                      ? "text-red-600"
                      : ""
                  }
                >
                  {option}
                </span>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => alert("Profile Updated")}
          className="w-full py-3 text-white font-bold rounded-md"
          style={{ backgroundColor: "#EB2726" }}
        >
          SAVE CHANGES
        </button>
      </section>
    </div>
  );
};

export default EditProfileScreen;
