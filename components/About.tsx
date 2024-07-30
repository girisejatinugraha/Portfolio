import { profileImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
          Hi There!, My name is Giri Sejati Nugraha, commonly known as Apang. Currently, 
          I reside in Cimahi City and am a Informatics Engineering student at STMIK Mardira Indonesia. 
          </p>
          <p>
          With a background in Information Systems, I am enthusiastic about developing my skills in technology and information. 
          I have a particular interest in the fields of Data Analyst, Data Scientist, and Web Developer. I am eager to continuously learn, face new challenges, 
          and create innovative solutions. I possess strong communication skills and easily adapt to new things.
          </p>
          <p>Personal Skills:</p>
          <p>1. Hard Skills:</p>
          <p>• Data Analyst & Scientist:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">
                <AiFillThunderbolt />
              </span>
              Microsoft Excel
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">
                <AiFillThunderbolt />
              </span>
              Tableau
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">
                <AiFillThunderbolt />
              </span>
              SQL
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">
                <AiFillThunderbolt />
              </span>
              Python
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">
                <AiFillThunderbolt />
              </span>
              R
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">
                <AiFillThunderbolt />
              </span>
              Data Visualization
            </li>
          </ul>
          <p>• Web Developer:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">
                <AiFillThunderbolt />
              </span>
              HTML
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">
                <AiFillThunderbolt />
              </span>
              CSS & SCSS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">
                <AiFillThunderbolt />
              </span>
              Tailwind CSS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">
                <AiFillThunderbolt />
              </span>
              JavaScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">
                <AiFillThunderbolt />
              </span>
              PHP
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">
                <AiFillThunderbolt />
              </span>
              Laravel
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">
                <AiFillThunderbolt />
              </span>
              React.Js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">
                <AiFillThunderbolt />
              </span>
              GatsbyJS
            </li>
          </ul>
          <p>2. Soft Skills:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">
                <AiFillThunderbolt />
              </span>
              Communication
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">
                <AiFillThunderbolt />
              </span>
              Critical Thinking
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">
                <AiFillThunderbolt />
              </span>
              Problem Solving
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">
                <AiFillThunderbolt />
              </span>
              Attention to detail
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">
                <AiFillThunderbolt />
              </span>
              Research
            </li>
          </ul>
          <p>3. Other Skills:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">
                <AiFillThunderbolt />
              </span>
              Git
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">
                <AiFillThunderbolt />
              </span>
              GitHub
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
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
        </div>
      </div>
    </section>
  );
};

export default About;
