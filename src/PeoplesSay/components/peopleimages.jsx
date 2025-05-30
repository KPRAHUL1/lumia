import { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion

export default function People_Image(props) {
  const [value, setValue] = useState(false);

  const { titles, tag, subtitle, images, description, star, images1 } = props;

  return (
    <>
      <div className="grid grid-cols-1 p-5 text-center justify-items-center  rounded-xl gap-5 mx-5 xl:mx-0 my-6 bg-white ">
        <h4>{titles}</h4>
        <p className="">{tag}</p>

        {/* Framer Motion Image with Fade & Move Up on Hover */}
        <div className="relative w-32 h-32 overflow-hidden rounded-full">
        <motion.img
          src={value ? images1 : images}
          alt=""
          className="absolute inset-0 w-full h-full rounded-full cursor-pointer"
          onMouseEnter={() => setValue(true)}
          onMouseLeave={() => setValue(false)}
          initial={{ opacity: 0, scale: 0.8, y: 10 }} // Start hidden, smaller, and slightly lower
          animate={{ opacity: 1, scale: 1, y: 0 }} // Fade in, scale up, and rise to normal position
          whileHover={{ scale: 1.05, y: -5, opacity: 0.9 }} // Slight lift & fade on hover
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }} // Professional ease effect
        />
      </div>

        <div className="flex flex-row gap-2">
          <img src={star} className="w-4"/>
          <img src={star} className="w-4"/>
          <img src={star} className="w-4"/>
          <img src={star} className="w-4"/>
          <img src={star} className="w-4"/>
        </div>
        <h4 className="text-gray-500">{subtitle}</h4>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </>
  );
}
