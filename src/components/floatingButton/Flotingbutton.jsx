import { useState, useEffect, useRef } from "react";
import arrow from "../../assets/icons/icons8-collapse-arrow-96.png"
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
const FloatingButton = () => {
  const listRef= useRef(null);
  const isInView = useInView(listRef,{once:false})
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Handle scroll progress calculation
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / windowHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div ref={listRef} initial={{opacity:0}} animate={isInView?{opacity:1}:{opacity:0}} className="fixed z-10 hidden bottom-10 right-20 lg:block">
      <button
        className="relative flex items-center justify-center transition-all bg-white rounded-full shadow-lg cursor-pointer w-14 h-14 hover:shadow-xl"
        onClick={scrollToTop}
      >
        {/* Progress Ring */}
        <svg className="absolute w-full h-full transform rotate-[-90deg]" viewBox="0 0 36 36">
          <circle
            className="text-gray-300"
            stroke="currentColor"
            strokeWidth="3"
            fill="transparent"
            r="15"
            cx="18"
            cy="18"
          />
          <circle
            className="text-blue-500"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            fill="transparent"
            r="15"
            cx="18"
            cy="18"
            strokeDasharray="94.2"
            strokeDashoffset={94.2 - (scrollProgress / 100) * 94.2}
          />
        </svg>

        {/* Arrow Icon */}
        <img src={arrow} alt="" className="w-5"/>
        
      </button>
    </motion.div>
  );
};

export default FloatingButton;
