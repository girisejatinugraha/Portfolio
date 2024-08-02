import { motion } from "framer-motion";

interface Props {
  title: string;
  titleNo: string;
}

const SectionTitle = ({ title, titleNo }: Props) => {
  return (
    <motion.h2
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      viewport={{ once: true }} // Only animate once
      className="font-titleFont text-2xl font-semibold flex items-center"
    >
      {title}
      <span className="hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-gray-700 ml-6"></span>
    </motion.h2>
  );
};

export default SectionTitle;