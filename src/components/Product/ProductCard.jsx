import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ProductCard = ({
  id,
  images = [],
  label,
  title,
  description,
  subscription,
  colors = [],
  materials = [],
  sizes = [],
  price,
}) => {
  const [liked, setLiked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const primaryImage = images[0] ? `http://localhost:5000/${images[0]}` : "http://localhost:5000/fallback-image.jpg"; // Default primary image
  const secondaryImage = images[1] ? `http://localhost:5000/${images[1]}` : primaryImage; // Use primaryImage as fallback for secondary

  // Handle click to navigate to the product details page
  const handleProductClick = () => {
    navigate(`/shopping/${id}`); // Navigate to the ShoppingRoute with product ID
  };

  return (
    <motion.div
      className="bg-white p-4 rounded-2xl shadow-md relative transition-all duration-300 overflow-hidden z-0 cursor-pointer"
      // onClick={handleProductClick} // Trigger navigation on click
      whileHover={{ }}
      transition={{ type: "easeIn", duration: 0.3 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Animated Image Change on Hover */}
      <motion.img
        key={hovered ? secondaryImage : primaryImage}
        src={hovered ? secondaryImage : primaryImage}
        alt={title}
        onClick={handleProductClick}
        className="rounded-lg w-full object-cover"
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1, }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />

      {/* New Label */}
      {label && (
        <span
          className={`absolute top-2 left-2 text-xs px-2 py-1 rounded font-semibold
          ${label === "NEW" ? "bg-green-500 text-white" : "bg-gray-500 text-white"}`}
        >
          {label}
        </span>
      )}

      {/* Subscription Label */}
      {subscription && (
        <span className="absolute top-2 left-14 bg-yellow-400 text-black text-xs px-2 py-1 rounded">
          SUBSCRIPTION ONLY
        </span>
      )}

      {/* Favorite Button */}
      <button
        className="absolute top-7 right-7 text-gray-400  transition-all duration-300"
        onClick={() => setLiked(!liked)}
        aria-label={liked ? "Remove from favorites" : "Add to favorites"}
      >
        {liked ? (
          <FaHeart className="text-blue-500 text-2xl transition-all duration-300" />
        ) : (
          <FaRegHeart className="text-2xl transition-all text-gray-400 duration-300 hover:text-blue-400" />
        )}
      </button>

      {/* Product Title */}
      <div className="flex flex-col justify-center items-center gap-3 mt-2">
      <div className="flex gap-2 mt-1">
            {colors.length > 0 ? (
              colors.map((color, index) => (
                <div key={index} className="w-8 h-8 rounded border" style={{ backgroundColor: color }} />
              ))
            ) : (
              <p>No colors available</p>
            )}
          </div>
        <h3 className="text-center font-bold text-gray-900 mt-3">{title}</h3>
        <h6 className="text-gray-600">{description}</h6>
        <h3 className="text-lg font-semibold">${price}</h3>
      </div>

      {/* Hover Details */}
      <motion.div
        className="absolute bottom-0 left-0 w-full bg-white p-3 rounded-b-2xl shadow-lg flex flex-col justify-center items-center"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: hovered ? 0 : 40, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Colors */}
        <div className="mb-2 flex flex-col justify-center items-center gap-2">
          <h6 className="text-gray-600">{description}</h6>
          <p className="text-sm font-semibold">Color:</p>
          <div className="flex gap-2 mt-1">
            {colors.length > 0 ? (
              colors.map((color, index) => (
                <div key={index} className="w-8 h-8 rounded border" style={{ backgroundColor: color }} />
              ))
            ) : (
              <p>No colors available</p>
            )}
          </div>
        </div>

        {/* Materials */}
        <div className="mb-2 flex flex-col justify-center items-center">
          <p className="text-sm font-semibold">Material:</p>
          <div className="flex gap-2 mt-1">
            {materials.length > 0 ? (
              materials.map((material, index) => (
                <div key={index} className="rounded border px-3 py-2 flex items-center justify-center">
                  <p className="text-xs ">{material}</p>
                </div>
              ))
            ) : (
              <p>No materials listed</p>
            )}
          </div>
        </div>

        {/* Sizes */}
        <div className="mb-2 flex flex-col justify-center items-center gap-3">
          <p className="text-sm font-semibold">Size:</p>
          <div className="flex gap-2 mt-1">
            {sizes.length > 0 ? (
              sizes.map((size, index) => (
                <div key={index} className="px-2 py-1 border rounded text-sm">{size}</div>
              ))
            ) : (
              <p>No sizes available</p>
            )}
          </div>
        </div>

        {/* Price */}
        <p className="text-lg font-bold text-gray-900">${price}</p>
        <button className="bg-blue-600 rounded-full hover:bg-gray-800 text-white font-semibold px-3 py-2 ">
          ADD TO CART
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;
