import  { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "flowbite-react";
import { FaEye, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Carosalshoe({ id, images = [], title, description, money, subtitle }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const primaryImage = images[0] ? `http://localhost:5000/${images[0]}` : "http://localhost:5000/fallback-image.jpg";
  const secondaryImage = images[1] ? `http://localhost:5000/${images[1]}` : primaryImage;

  const handleProductClick = () => {
    navigate(`/shopping/${id}`); // Navigate to product details page
  };

  return (
    <motion.div
      className="relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
       // Navigate on click
    >
      <Card className="relative flex flex-col items-center justify-center bg-white shadow rounded-2xl md:p-4">
        {/* Brand Name */}
        <p className="self-start text-sm font-bold text-gray-600">ASIKS</p>

        {/* Main Content */}
        <div className="flex flex-row justify-center w-full gap-3">
          {/* Left Side - Image */}
          <div className="relative flex justify-center w-1/3">
            <motion.img
              src={isHovered ? secondaryImage : primaryImage}
              alt={title}
              onClick={handleProductClick}
              className="object-cover transition-transform duration-500 rounded-xl md:w-full"
              animate={{ scale: isHovered ? 1.1 : 1, opacity: isHovered ? 0.8 : 1 }}
            />
          </div>

          {/* Right Side - Details */}
          <div className="w-2/3">
            <h5 className="font-semibold text-gray-600 md:text-lg">{title}</h5>

            {/* Review Stars */}
            <div className="flex items-center mt-1 text-yellow-400">
              ⭐⭐⭐⭐☆ <span className="ml-1 text-sm text-gray-500">(2 reviews)</span>
            </div>

            {/* Description */}
            <p className="hidden mt-2 text-sm text-gray-600 md:block">{description}</p>

            {/* Subtitle */}
            <h3 className="hidden mt-1 text-xs text-gray-500 md:block">{subtitle}</h3>

            {/* Price and Button */}
            <div className="flex items-center justify-between mt-3">
              <p className="text-xl font-bold text-gray-900">{money}</p>

              {/* Quick Shop Button (Visible on Hover) */}
              {isHovered || window.innerWidth < 768 ? (
                <>
                <motion.div
                  className="absolute bottom-0 right-0 flex flex-col items-center justify-center p-3 bg-white rounded-b-2xl"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <motion.button
                    className="px-4 py-2 text-sm font-semibold text-white transition-all bg-blue-500 rounded-full hover:bg-blue-600"
                    whileTap={{ scale: 0.9 }}
                  >
                    QUICK SHOP
                  </motion.button>
                </motion.div> <div className="absolute flex space-x-3 text-gray-500 top-3 right-3">
          <FaEye className="text-lg cursor-pointer hover:text-gray-800" />
          <FaHeart className="text-lg cursor-pointer hover:text-red-500" />
        </div></>
              ) : null}
            </div>
          </div>
        </div>

        {/* Icons (Eye & Heart) */}
       
      </Card>
    </motion.div>
  );
}
