import { profileImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });

  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: 20 }}
          animate={inView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4"
        >
          <p className="text-justify">
            Hi There!, My name is Giri Sejati Nugraha, commonly known as Apang.
            Currently, I reside in Cimahi City and am a Informatics Engineering
            student at STMIK Mardira Indonesia.
          </p>
          <p className="text-justify">
            With a background in Information Systems, I am enthusiastic about
            developing my skills in technology and information. I have a
            particular interest in the fields of Data Analyst, Data Scientist,
            and Web Developer. I am eager to continuously learn, face new
            challenges, and create innovative solutions. I possess strong
            communication skills and easily adapt to new things.
          </p>
          <p className="text-justify">
            You can reach me via email at <a href="mailto:girisejatinugraha@gmail.com" className="text-yellow-500 hover:underline">girisejatinugraha@gmail.com</a>.
            </p>
        </motion.div>
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, x: 20 }}
          animate={inView2 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full lgl:w-1/3 h-80 relative group"
        >
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="profileImg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-yellow-500 rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;