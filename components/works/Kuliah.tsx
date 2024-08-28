import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Kuliah = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
      Informatics Engineering 
        <span className="text-yellow-500 tracking-wide">- STMIK Mardira Indonesia</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
      Sep 2022 - Sep 2026
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-yellow-500 mt-1">
            <TiArrowForward />
          </span>
          GPA: 3.61
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-yellow-500 mt-1">
            <TiArrowForward />
          </span>
          Relevant Coursework: Application Program Package, Algorithm & Programming, Web Programming I & II, Database Systems, Information System Analysis, Statistics.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-yellow-500 mt-1">
            <TiArrowForward />
          </span>
          Skills: HTML, CSS, JavaScript, PHP, Laravel, SQL, Python, Git, Github, Microsoft Office.
        </li>
      </ul>
    </motion.div>
  );
};

export default Kuliah;