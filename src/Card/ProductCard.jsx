import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1); 


  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="group relative bg-white border rounded-lg shadow-md p-4 transition-transform duration-300 ">
     
      {product.isNew && (
        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
          NEW
        </div>
      )}

      <div className="relative">
        <img
          src={`http://localhost:5000/${product.imageUrl}`}
          alt={product.name}
          className="rounded-lg w-full object-cover h-48"
        />
      
        <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <FaRegEye />
        </button>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mt-1">Color: {product.color}</p>
<div className="flex gap-2 mt-2">
  {product.colors?.map((color, index) => (
    <div
      key={index}
      className="w-6 h-6 rounded-full border border-gray-300"
      style={{ backgroundColor: color }}
      title={color}
    ></div>
  ))}
</div>


<div className="mt-3">
  <p className="text-sm text-gray-500">Size:</p>
  <div className="flex gap-2 mt-1">
    {product.sizes?.map((size) => (
      <button
        key={size}
        className="px-2 py-1 border rounded hover:bg-blue-500 hover:text-white transition"
      >
        {size}
      </button>
    ))}
  </div>
</div>


        {/* Price and Pre-Order Button */}
        <div className="mt-4">
          <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
          <div className="flex items-center mt-2">
            <button
              onClick={handleDecrement}
              className="w-8 h-8 bg-gray-200 text-lg font-bold flex justify-center items-center hover:bg-gray-300"
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              readOnly
              className="w-12 text-center border-t border-b border-gray-300"
            />
            <button
              onClick={handleIncrement}
              className="w-8 h-8 bg-gray-200 text-lg font-bold flex justify-center items-center hover:bg-gray-300"
            >
              +
            </button>
          </div>
          <button className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            PRE-ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;