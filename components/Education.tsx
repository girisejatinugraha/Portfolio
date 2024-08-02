import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import Kuliah from "./works/Kuliah";

const Education = () => {
  const [workKuliah, setWorkKuliah] = useState(true);
  
  const handleKuliah = () => {
    setWorkKuliah(true);
  };

  // Refs for animation
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  return (
    <section
      id="education"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Education" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <motion.ul
          ref={ref}
          initial={{ x: -20, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:w-32 flex flex-col"
        >
          <li
            onClick={handleKuliah}
            className={`${
              workKuliah
                ? "border-l-yellow-500 text-yellow-500"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            STMIK Mardira Indonesia
          </li>
        </motion.ul>
        {workKuliah && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Kuliah />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Education;