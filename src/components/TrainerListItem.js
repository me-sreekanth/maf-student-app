import React from "react";
import { useNavigate } from "react-router-dom";

const TrainerListItem = ({ trainer }) => {
  const navigate = useNavigate();

  const handleTrainerClick = () => {
    navigate("/trainer-details", { state: { trainer } });
  };

  return (
    <div className="pt-20" onClick={handleTrainerClick}>
      <div
        className="flex justify-between items-center p-4"
        style={{
          background: "linear-gradient(157.07deg, #3A3A3A 0%, #252525 81.65%)",
        }}
      >
        <div className="flex-1">
          <h4 className="text-xl font-bold text-white">
            {trainer.name.split(" ")[0]}
            <br />
            {trainer.name.split(" ")[1]}
          </h4>
          <div className="text-yellow-400 flex items-center">
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M12 5l7 7-7 7"
              ></path>
            </svg>
            <span className="text-white text-lg">{trainer.rate}</span>
            <span className="ml-2 text-white">{trainer.age}F</span>
          </div>
        </div>
        <img
          src={trainer.imageUrl}
          alt={trainer.name}
          className="h-full object-cover"
          style={{
            height: "200px",
            marginRight: "0px",
            position: "absolute",
            right: 20,
            paddingBottom: 70,
          }}
        />
      </div>
      <div className="cursor-pointer overflow-hidden p-4 border-1 border-[#DEDEDE] shadow-md ">
        {trainer.schedule.map((slot, i) => (
          <div key={i} className="flex justify-between text-gray-700">
            <span>{slot.day}</span>
            <span className={slot.time === "Busy" ? "text-red-600" : ""}>
              {slot.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainerListItem;
