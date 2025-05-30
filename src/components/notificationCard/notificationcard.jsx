import { X, Eye } from "lucide-react";
import "./notification.css";

const NotificationCard = ({ product, onClose }) => {
  return (
    <div className="fixed bottom-5 left-5 bg-white shadow-lg rounded-xl p-4 flex items-center w-96 z-40 
                    animate-fade-in transition-all duration-500 transform opacity-100">
      {/* Product Image */}
      <img 
        src={`http://localhost:5000/${product.imageUrls?.[0]}`} 
        alt={product.name} 
        className="w-28 rounded-lg object-cover"
      />

      {/* Product Details */}
      <div className="flex flex-1 flex-col justify-center ml-3">
        <div className="flex gap-2 mb-1">
          {product.subscription}
          {product.isSale && <span className="bg-red-500 text-white px-2 py-1 text-xs rounded-md">SALE</span>}
          {product.isNew && <span className="bg-green-500 text-white px-2 py-1 text-xs rounded-md">NEW</span>}
        </div>
        <h3 className="font-semibold text-gray-800 text-sm">{product.name}</h3>
        <p className="text-gray-500 text-xs">{product.message}</p>
        <p className="text-blue-500 text-xs">{product.time} ago</p>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col items-center gap-16 ml-4">
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          <X size={20} />
        </button>
        <button className="text-gray-400 hover:text-blue-500">
          <Eye size={20} />
        </button>
      </div>
    </div>
  );
};

export default NotificationCard;
