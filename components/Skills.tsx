import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import { useInView } from "react-intersection-observer";

const skillsData = {
  "Data Analyst & Scientist": [
    "Microsoft Excel",
    "Tableau",
    "SQL",
    "Python",
    "R",
    "Data Visualization",
  ],
  "Web Developer": [
    "HTML",
    "CSS & SCSS",
    "Tailwind CSS",
    "JavaScript",
    "PHP",
    "Laravel",
    "React.Js",
    "GatsbyJS",
    "Git",
    "GitHub",
  ],
  SoftSkills: [
    "Communication",
    "Critical Thinking",
    "Problem Solving",
    "Attention to detail",
    "Research",
  ],
};

const Skills = () => {
  const { ref: refDataAnalyst, inView: inViewDataAnalyst } = useInView({ triggerOnce: true });
  const { ref: refWebDeveloper, inView: inViewWebDeveloper } = useInView({ triggerOnce: true });
  const { ref: refSoftSkills, inView: inViewSoftSkills } = useInView({ triggerOnce: true });

  return (
    <section
      id="skills"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="Personal Skills" titleNo="" />

      <div className="flex flex-col lgl:flex-row gap-16">
        <motion.div
          ref={refDataAnalyst}
          initial={{ opacity: 0, y: 20 }}
          animate={inViewDataAnalyst ? { opacity: 1, y: 0 } : {}}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lgl:w-1/3"
        >
          <h3 className="text-xl font-semibold mb-4">Data Analyst & Scientist</h3>
          <ul className="grid grid-cols-2 gap-4">
            {skillsData["Data Analyst & Scientist"].map((skill, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inViewDataAnalyst ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-center gap-2 text-sm font-medium"
              >
                <AiFillThunderbolt className="text-yellow-500" />
                {skill}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          ref={refWebDeveloper}
          initial={{ opacity: 0, y: 20 }}
          animate={inViewWebDeveloper ? { opacity: 1, y: 0 } : {}}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lgl:w-1/3"
        >
          <h3 className="text-xl font-semibold mb-4">Web Developer</h3>
          <ul className="grid grid-cols-2 gap-4">
            {skillsData["Web Developer"].map((skill, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inViewWebDeveloper ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-center gap-2 text-sm font-medium"
              >
                <AiFillThunderbolt className="text-yellow-500" />
                {skill}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          ref={refSoftSkills}
          initial={{ opacity: 0, y: 20 }}
          animate={inViewSoftSkills ? { opacity: 1, y: 0 } : {}}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lgl:w-1/3 mt-8 lgl:mt-0"
        >
          <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
          <ul className="grid grid-cols-2 gap-4">
            {skillsData.SoftSkills.map((skill, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inViewSoftSkills ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-center gap-2 text-sm font-medium"
              >
                <AiFillThunderbolt className="text-yellow-500" />
                {skill}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;