import look1 from "../../assets/lookbook/look1.png";
import look2 from "../../assets/lookbook/look2.png";
import look3 from "../../assets/lookbook/look3.png";
import look4 from "../../assets/lookbook/look4.png";
import "./LookBook.css";
import { motion } from "framer-motion";

const lookbookData = [
  {
    src: look1,
    hotspots: [
      { top: "25%", left: "35%" },
      { top: "85%", left: "40%" },
      { top: "55%", left: "48%" },
    ],
  },
  {
    src: look4,
    hotspots: [{ top: "38%", left: "75%" }],
  },
  {
    src: look3,
    hotspots: [
      { top: "60%", left: "35%" },
      { top: "90%", left: "50%" },
      { top: "30%", left: "50%" },
    ],
  },
  {
    src: look2,
    hotspots: [
      { top: "50%", left: "80%" },
      { top: "85%", left: "70%" },
      { top: "20%", left: "30%" },
      { top: "60%", left: "20%" },
    ],
  },
];

export default function LookbookSection() {
  return (
    <section className="pt-10 bg-gray-50">
      {/* Header Section */}
      <div>
        <h4 className="text-center pt-2 md:text-2xl text-gray-900 font-semibold text-2xl">
          Our Lookbook
        </h4>
        <p className="text-center text-sm text-gray-500 pt-2">
          We know your expectations about clothes
        </p>
      </div>

      {/* Image Grid Section */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.8,delay:0.3 }}
        viewport={{ once: true }} // Animates once when in viewport
        className="grid grid-cols-1 gap-5 m-5 md:grid-cols-2 xl:grid-cols-2 xl:gap-6 xl:py-10 xl:px-28 xl:ml-28 xl:mr-28"
      >
        {lookbookData.map((item, index) => (
          <div key={index} className="relative overflow-hidden rounded-2xl">
            <img
              src={item.src}
              alt={`Lookbook image ${index + 1}`}
              className="w-full h-auto rounded-2xl transition-transform duration-300 ease-in-out hover:scale-110"
            />

            {/* Clickable Hotspots */}
            {item.hotspots.map((spot, idx) => (
              <button
                key={idx}
                className="absolute w-7 h-7 bg-white rounded-full flex items-center cursor-pointer justify-center animate-pulse-custom"
                style={{
                  top: spot.top,
                  left: spot.left,
                  transform: "translate(-50%, -50%)",
                }}
                onClick={() => alert(`Clicked on hotspot ${idx + 1} of image ${index + 1}`)}
              >
                <div className="w-4 h-4 bg-green-400 rounded-full"></div>
              </button>
            ))}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
