import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SessionDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { session } = location.state || {};

  if (!session) {
    return <div>No session details found</div>;
  }

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
        <button className="text-white bg-black px-4 py-2 rounded-md flex items-center">
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
              d="M14 7l-2 2-2-2m0 6l2-2 2 2m2 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-8a2 2 0 00-2 2v10a2 2 0 002 2h8"
            ></path>
          </svg>
          Support
        </button>
      </header>

      <section className="bg-black text-white p-6 rounded-lg mb-6">
        <p className="text-red-600">
          {session.date}, {session.day}
        </p>
        <h1 className="text-3xl font-bold mb-2">{session.time}</h1>
        <p className="text-gray-400">{session.duration}</p>
        <div className="bg-red-600 text-white px-4 py-2 mt-4 rounded-md">
          Starts in {session.sessionIn}
        </div>
      </section>

      <section className="mb-4">
        <h3 className="font-bold text-gray-800 mb-2">// Session Details</h3>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img
            src="/path/to/trainer-image.png"
            alt={session.trainer}
            className="w-full h-48 object-cover rounded-lg"
          />
          <h2 className="text-xl font-bold mt-4">{session.trainer}</h2>
          <div className="flex mt-4">
            <button className="flex-1 bg-red-600 text-white font-bold py-2 rounded-md mr-2 flex items-center justify-center">
              Message Trainer
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 7l-2 2-2-2m0 6l2-2 2 2m2 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-8a2 2 0 00-2 2v10a2 2 0 002 2h8"
                ></path>
              </svg>
            </button>
            <button className="flex-1 border-2 border-black text-black font-bold py-2 rounded-md flex items-center justify-center">
              Call Trainer
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12h2m4 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="mb-4">
        <h3 className="font-bold text-gray-800 mb-2">// Location</h3>
        <p className="text-gray-700">Home</p>
        <p className="text-gray-500">{session.location}</p>
      </section>

      <section className="mb-4">
        <h3 className="font-bold text-gray-800 mb-2">// Notes</h3>
        <p className="text-gray-700">{session.notes}</p>
      </section>

      <footer className="mt-6">
        <button className="w-full text-red-600 font-bold py-2 rounded-md border border-red-600">
          Cancel Session
        </button>
      </footer>
    </div>
  );
};

export default SessionDetails;
