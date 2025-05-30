import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function BrandImage() {
  const [value, setValue] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/brand")
      .then((res) => setValue(res.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <>
      <motion.div 
        className="pt-10 grid grid-cols-2 md:grid md:grid-cols-3 justify-items-center lg:justify-center lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {value.map((item, index) => (
          <motion.div
            key={index}
            className="m-4 overflow-hidden rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <a href="">
              <img
                src={`http://localhost:5000/${item.imageUrl}`}
                className="rounded-full lg:w-32 lg:h-32 w-32 h-32 xl:h-40 xl:w-40 md:w-40 md:h-40 transition duration-300 ease-in-out hover:scale-110"
              />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
