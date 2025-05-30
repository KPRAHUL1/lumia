import { motion } from "framer-motion";


const ToggleButton = ({ selectedSeason, setSelectedSeason }) => {
  return (
    <div className="flex flex-row justify-center items-center mt-6">
      <div className="relative flex flex-row border border-gray-400 bg-white rounded-full p-1 w-52">
        {/* Animated background */}
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-full bg-blue-600 rounded-full"
          initial={false}
          animate={{ x: selectedSeason === "Winter" ? 0 : "100%" }}
          transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        />

        {/* WINTER Button */}
        <button
          className={`relative w-24 py-2 mx-1 text-center font-semibold cursor-pointer text-gray-600 transition-all duration-300 rounded-full ${
            selectedSeason === "Winter" ? "text-white" : ""
          }`}
          onClick={() => setSelectedSeason("Winter")}
        >
          WINTER
        </button>

        {/* SUMMER Button */}
        <button
          className={`relative w-24 py-2 mx-1 text-center font-semibold cursor-pointer text-gray-600 transition-all duration-300 rounded-full ${
            selectedSeason === "Summer" ? "text-white" : ""
          }`}
          onClick={() => setSelectedSeason("Summer")}
        >
          SUMMER
        </button>
      </div>
    </div>
  );
};

export default ToggleButton;
