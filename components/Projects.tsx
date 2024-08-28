import { Web, Absensi, Merk, Perpustakaan, Hotel, ECommerce, Sekolah } from "@/public/assets";
import Image from "next/image";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

const Projects = () => {
  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Projects I Have Created" titleNo=""/>
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <motion.div className="flex flex-col xl:flex-row gap-6" initial="hidden" whileInView="visible" variants={projectVariants} viewport={{ once: true }}>
          <a className="w-full xl:w-1/2 h-auto relative group">
            <div>
              <Image className="w-full h-full object-contain" src={Web} alt="Web" />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-yellow-500 text-sm tracking-wide">
                 Projects 1
              </p>
              <h3 className="text-2xl font-bold">Web Design Landing Page</h3>
              <h6 className="text-0xl">Nov 2022 - Nov 2022</h6>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
            • The landing page web design I created is simple to meet the requirements of the Mid-Semester Exam Task in the first semester.
              <br/>
            • In its creation, I prioritize easy navigation and a clean appearance so that it can be easily accessed by users.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>HTML</li>
              <li>CSS</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a className="hover:text-yellow-500 duration-300" href="https://github.com/girisejatinugraha/Landing-Page-Desain-Web" target="_blank">
                <TbBrandGithub />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div className="flex flex-col xl:flex-row-reverse gap-6" initial="hidden" whileInView="visible" variants={projectVariants} viewport={{ once: true }}>
          <a className="w-full xl:w-1/2 h-auto relative group">
            <div>
              <Image className="w-full h-full object-contain" src={Absensi} alt="Absensi" />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-yellow-500 text-sm tracking-wide">
                Projects 2
              </p>
              <h3 className="text-2xl font-bold">Student Attendance Application</h3>
              <h6 className="text-0xl">Jan 2023 - Jan 2023</h6>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
            • This Student Attendance Application is created to fulfill the Final Semester Exam Assignment in the first semester. 
              <br/>• My main goal in creating this application is to provide an easy-to-use tool for both lecturers and students to efficiently record attendance. 
              <br/>• The main features of this application are designed with simplicity and practicality as the top priorities.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>PHP</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a className="hover:text-yellow-500 duration-300" href="https://github.com/girisejatinugraha/Aplikasi-Absensi-Mahasiswa" target="_blank">
                <TbBrandGithub />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div className="flex flex-col xl:flex-row gap-6" initial="hidden" whileInView="visible" variants={projectVariants} viewport={{ once: true }}>
          <a className="w-full xl:w-1/2 h-auto relative group">
            <div>
              <Image className="w-full h-full object-contain" src={Merk} alt="Merk" />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-yellow-500 text-sm tracking-wide">
                Projects 3 
              </p>
              <h3 className="text-2xl font-bold">Brand/Type of Television</h3>
              <h6 className="text-0xl">Mei 2023 - Mei 2023</h6>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
            • The brand/type of this television is created to fulfill the Mid-Semester Exam Task in the second semester. 
              <br/>• This project is meticulously designed to ensure that it aligns with the given task guidelines and demonstrates a strong understanding of the materials taught during that time.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Laravel</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a className="hover:text-yellow-500 duration-300" href="https://github.com/girisejatinugraha/Type-Merk-Televisi" target="_blank">
                <TbBrandGithub />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div className="flex flex-col xl:flex-row-reverse gap-6" initial="hidden" whileInView="visible" variants={projectVariants} viewport={{ once: true }}>
          <a className="w-full xl:w-1/2 h-auto relative group">
            <div>
              <Image className="w-full h-full object-contain" src={Perpustakaan} alt="Perpustakaan" />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-yellow-500 text-sm tracking-wide">
                Projects 4
              </p>
              <h3 className="text-2xl font-bold">Library</h3>
              <h6 className="text-0xl">Jul 2023 - Jul 2023</h6>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
            • The library was created to fulfill the Final Semester Exam Task in the second semester.  
              <br/>• Carefully designed, this project is aimed to meet the given task guidelines while demonstrating a profound understanding of the materials taught throughout this semester.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Laravel</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a className="hover:text-yellow-500 duration-300" href="https://github.com/girisejatinugraha/Perpustakaan" target="_blank">
                <TbBrandGithub />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div className="flex flex-col xl:flex-row gap-6" initial="hidden" whileInView="visible" variants={projectVariants} viewport={{ once: true }}>
          <a className="w-full xl:w-1/2 h-auto relative group">
            <div>
              <Image className="w-full h-full object-contain" src={Hotel} alt="Hotel" />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-yellow-500 text-sm tracking-wide">
                Projects 5 
              </p>
              <h3 className="text-2xl font-bold">Hotel Booking Application</h3>
              <h6 className="text-0xl">Jan 2024 - Jan 2024</h6>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
            • The Hotel Booking Application is created during leisure time to facilitate users in booking accommodations online. 
            <br/> • Its aim is to enable users to book hotel rooms without having to leave their homes or offices, providing a more efficient and comfortable experience in trip planning.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>PHP</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a className="hover:text-yellow-500 duration-300" href="https://github.com/girisejatinugraha/Aplikasi-Pemesanan-Hotel" target="_blank">
                <TbBrandGithub />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div className="flex flex-col xl:flex-row-reverse gap-6" initial="hidden" whileInView="visible" variants={projectVariants} viewport={{ once: true }}>
          <a className="w-full xl:w-1/2 h-auto relative group">
            <div>
              <Image className="w-full h-full object-contain" src={ECommerce} alt="ECommerce" />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
            <p className="font-titleFont text-yellow-500 text-sm tracking-wide">
<<<<<<< HEAD
                Projects 6
=======
                Project 6
>>>>>>> bcb588fc16db5e8f0cb48f35e2bc04414b6f0ced
              </p>
              <h3 className="text-2xl font-bold">Dashboard-E-Commerce</h3>
              <h6 className="text-0xl">Apr 2024 - Apr 2024</h6>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
            • Know the number of transactions in our e-commerce, the total income earned, and the total products sold in our e-commerce per month.
            <br/>• Find out the number of transactions and total income based on store type.
            <br/>• Know how our customers are distributed based on city and gender.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Data Visualization</li>
              <li>Microsoft Excel</li>
              <li>Tableau</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-yellow-500 duration-300"
                href="https://github.com/girisejatinugraha/Dashboard-E-Commerce"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div className="flex flex-col xl:flex-row gap-6" initial="hidden" whileInView="visible" variants={projectVariants} viewport={{ once: true }}>
          <a className="w-full xl:w-1/2 h-auto relative group">
            <div>
              <Image className="w-full h-full object-contain" src={Sekolah} alt="Sekolah" />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-yellow-500 text-sm tracking-wide">
                Projects 7 
              </p>
              <h3 className="text-2xl font-bold">School Website</h3>
              <h6 className="text-0xl">Jul 2024 - Jul 2024</h6>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
            • The School Website was created to facilitate communication and access to information between the school, students, and parents online.
            <br/> • This website provides various features such as school information, educational programs, activity galleries, and contact information to facilitate interaction among all parties involved.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>React.js</li>
              <li>GatsbyJS</li>
              <li>SCSS</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a className="hover:text-yellow-500 duration-300" href="https://github.com/girisejatinugraha/Website-Sekolah" target="_blank">
                <TbBrandGithub />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;