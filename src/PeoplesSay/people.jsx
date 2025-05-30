import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import People_header from "./components/peopleheader";

export default function People() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <>
      <motion.section
        ref={sectionRef}
        initial={{ opacity: 0, y: 50 }} // Start hidden and slightly lower
        animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate only when in view
        transition={{ duration: 0.6, ease: "easeInOut" }} // Smooth transition
        className="pt-10"
      >
        <div>
          <h3 className="text-center pt-2 md:text-3xl font-semibold text-2xl">
            What People Say
          </h3>
          <p className="text-center pt-2">Shopping is cheaper than a psychiatrist.</p>
        </div>
        <People_header />
      </motion.section>
    </>
  );
}
