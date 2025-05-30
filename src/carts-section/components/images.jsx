import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion"; // Import Framer Motion

export default function Image() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://lumia-prisma-backend.onrender.com/api/category")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  return (
    <motion.div
      className="grid grid-cols-2 justify-items-center md:gap-3 bg-gray-50 md:flex lg:flex md:justify-center lg:justify-center xl:justify-evenly"
      initial={{ opacity: 0, y: 30 }} // Start hidden and move up
      whileInView={{ opacity: 1, y: 0 }} // Animate when scrolled into view
      viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the div is in view
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
    >
      {categories.map((category) => (
        <div
          key={category.id}
          className="grid grid-cols-1 justify-items-center hover:text-blue-600"
        >
          <div className="w-auto h-auto overflow-hidden rounded-full">
            <Link to={`/category/${category.name}`}>
              <img
                src={`http://localhost:5000/${category.imageUrl}`}
                alt={`Category ${category.name}`}
                className="transition duration-300 ease-in-out rounded-full xl:w-40 xl:h-40 md:w-auto md:h-auto w-28 h-28 lg:w-40 lg:h-36 hover:scale-110"
              />
            </Link>
          </div>
          <Link to={`/category/${category.name}`}>
            <h4 className="p-2 md:p-4">{category.name}</h4>
          </Link>
        </div>
      ))}
    </motion.div>
  );
}
