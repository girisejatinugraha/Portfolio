import { motion } from "framer-motion";
import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-titleFont text-5xl font-semibold"
      >
        Contact Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-[600px] text-center text-textDark"
      >
        If you have any questions or just want to say hello, I will do my best to reply to you!
      </motion.p>
      <motion.a
        href="mailto:girisejatinugraha@gmail.com"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <button className="w-40 h-14 border border-yellow-500 mt-6 font-titleFont text-sm text-yellow-500 tracking-wider rounded-md hover:bg-hoverColor duration-300">
          Email
        </button>
      </motion.a>
    </section>
  );
};

export default Contact;