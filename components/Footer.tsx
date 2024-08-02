import { motion } from "framer-motion";
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8 text-textLight py-8 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col items-center gap-4 z-10"
      >
        <h2 className="text-2xl font-semibold text-white">Connect with Me</h2>
        <p className="text-md text-center text-gray-300 max-w-md">
          Discover my latest project and follow me for fresh update.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex gap-6 z-10"
      >
        <a href="https://github.com/girisejatinugraha" target="_blank" rel="noopener noreferrer">
          <span className="w-12 h-12 text-2xl bg-transparent rounded-full inline-flex items-center justify-center hover:text-yellow-500 cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandGithub />
          </span>
        </a>
        <a href="https://www.linkedin.com/in/giri-sejati-nugraha/" target="_blank" rel="noopener noreferrer">
          <span className="w-12 h-12 text-2xl bg-transparent rounded-full inline-flex items-center justify-center hover:text-yellow-500 cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialLinkedin />
          </span>
        </a>
        <a href="https://www.instagram.com/gs.nugraha16/" target="_blank" rel="noopener noreferrer">
          <span className="w-12 h-12 text-2xl bg-transparent rounded-full inline-flex items-center justify-center hover:text-yellow-500 cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialInstagram />
          </span>
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-full flex justify-center items-center gap-4 z-10"
      >
        <div className="w-[2px] h-24 bg-textDark mt-6"></div>
        <p className="text-sm text-center text-gray-500 mt-6">
          &copy; 2024 Giri Sejati Nugraha. All Rights Reserved.
        </p>
        <div className="w-[2px] h-24 bg-textDark mt-6"></div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col items-center gap-2 z-10"
      >
        <p className="text-sm text-center text-gray-500 mt-4">
          Contact Me: <a href="mailto:girisejatinugraha@gmail.com" className="text-yellow-500 hover:underline">girisejatinugraha@gmail.com</a>
        </p>
        <p className="text-sm text-center text-gray-500">
          Phone: <a href="tel:+6282115623877" className="text-yellow-500 hover:underline">+62 821-1562-3877</a>
        </p>
      </motion.div>
    </div>
  );
};

export default Footer;