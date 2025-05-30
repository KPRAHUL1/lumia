import { motion } from "framer-motion";
import Brand_header from "./components/brand-header";
import Brand_image from "./components/brandimage";

export default function Our_Brands() {
    return (
        <>
            <motion.section 
                className="pt-5"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                viewport={{ once: true }}
            >
                <Brand_header />
                <Brand_image />
            </motion.section>
        </>
    );
}
