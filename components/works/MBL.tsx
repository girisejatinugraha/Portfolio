import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const MBL = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
      Substitute Teacher
        <span className="text-yellow-500 tracking-wide">- SD Maria Bintang Laut</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Sep 2022 - Nov 2022
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-yellow-500 mt-1">
            <TiArrowForward />
          </span>
          Teaching ICT subjects.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-yellow-500 mt-1">
            <TiArrowForward />
          </span>
          Providing guidance and support to students.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-yellow-500 mt-1">
            <TiArrowForward />
          </span>
          Assessing student performance.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-yellow-500 mt-1">
            <TiArrowForward />
          </span>
          Teaching digital ethics.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-yellow-500 mt-1">
            <TiArrowForward />
          </span>
          Communicating with parents of students.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-yellow-500 mt-1">
            <TiArrowForward />
          </span>
          Skills: Microsoft Office, Communication, Problem Solving, Time Management.
        </li>
      </ul>
    </motion.div>
  );
};

export default MBL;
