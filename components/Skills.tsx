import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import { useInView } from "react-intersection-observer";

const skillsData = {
  hardSkills: {
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
  },
  softSkills: [
    "Communication",
    "Critical Thinking",
    "Problem Solving",
    "Attention to detail",
    "Research",
  ],
};

const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section
      id="skills"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="Personal Skills" titleNo="" />
      <div ref={ref} className="flex flex-col lgl:flex-row gap-16">
        {Object.keys(skillsData.hardSkills).map((category, categoryIndex) => {
          const skills = skillsData.hardSkills[category];
          if (!Array.isArray(skills)) {
            console.error(`Expected an array but received: ${skills}`);
            return null;
          }
          return (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full lgl:w-1/2"
            >
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <ul className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
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
          );
        })}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lgl:w-1/2 mt-8 lgl:mt-0"
        >
          <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
          <ul className="grid grid-cols-2 gap-4">
            {skillsData.softSkills.map((skill, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
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