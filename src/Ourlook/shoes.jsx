import Shoecarosal from "./components/shoecarosal";
import Shoeheader from "./components/shoeheader";
import { motion } from "framer-motion";

export default function Shoessection() {
  return (
    <motion.section
      className="mt-5"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Shoeheader />
      <Shoecarosal />
    </motion.section>
  );
}
