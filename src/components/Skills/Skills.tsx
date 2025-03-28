import FIGMA from "../../assets/hard_skills/Figma.svg";
import REACT from "../../assets/hard_skills/React.svg";
import HTML from "../../assets/hard_skills/HTML5.svg";
import CSS from "../../assets/hard_skills/CSS3.svg";
import JS from "../../assets/hard_skills/Javascript.svg";
import TS from "../../assets/hard_skills/TypeScript.svg";
import WORDPRESS from "../../assets/hard_skills/Wordpress.svg";
import PHP from "../../assets/hard_skills/Php.svg";
import PYTHON from "../../assets/hard_skills/Python.svg";
import CSHARP from "../../assets/hard_skills/C-sharp.svg";
import C from "../../assets/hard_skills/C.svg";
import GITHUB from "../../assets/hard_skills/Github.svg";
import GIT from "../../assets/hard_skills/Git.svg";

import { motion } from "motion/react";

const hardSkills = [
  {
    id: 1,
    name: "Figma",
    img: FIGMA,
  },
  {
    id: 2,
    name: "React",
    img: REACT,
  },
  {
    id: 3,
    name: "HTML",
    img: HTML,
  },
  {
    id: 4,
    name: "CSS",
    img: CSS,
  },
  {
    id: 5,
    name: "JS",
    img: JS,
  },
  {
    id: 6,
    name: "TS",
    img: TS,
  },
  {
    id: 7,
    name: "Wordpress",
    img: WORDPRESS,
  },
  {
    id: 8,
    name: "PHP",
    img: PHP,
  },
  {
    id: 9,
    name: "Python",
    img: PYTHON,
  },
  {
    id: 10,
    name: "CSharp",
    img: CSHARP,
  },
  {
    id: 11,
    name: "C",
    img: C,
  },
  {
    id: 12,
    name: "Github",
    img: GITHUB,
  },
  {
    id: 13,
    name: "Git",
    img: GIT,
  },
];

const softSkills = [
  {
    id: 1,
    name: "Proatividade",
  },
  {
    id: 2,
    name: "Liderança",
  },
  {
    id: 3,
    name: "Confiança",
  },
  {
    id: 4,
    name: "Aprendizado",
  },
  {
    id: 5,
    name: "Responsabilidade",
  },
];

const Skills = () => {
  return (
    <section className="bg-dark2 text-white py-12">
      <div className="container px-6 md:px-18">
        {/* Título da Seção */}
        <div className="!flex flex-col items-center !justify-center text-center pt-6 gap-2.5 w-full">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              duration: 0.5,
              delay: 0.4,
              ease: "easeInOut",
            }}
            className="bg-[rgba(104,9,189,0.1)] px-8 py-2 rounded-[20px] text-primary font-releway font-semibold"
            id="skills"
          >
            Hard
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              duration: 0.7,
              delay: 0.6,
              ease: "easeInOut",
            }}
            className="text-white font-releway font-semibold text-4xl"
          >
            Tecnologias
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full flex justify-center items-center align-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              duration: 1,
              delay: 1.2,
              ease: "easeInOut",
            }}
            className="flex flex-wrap justify-center items-center align-center py-6 md:py-8 md:max-w-[60%] gap-5"
          >
            {hardSkills.map((hardSkill) => (
              <div key={hardSkill.id} className=" w-fit pt-6 md:p-0">
                <img
                  className="w-[70px] h-[70px] "
                  src={hardSkill.img}
                  alt={hardSkill.name}
                />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="container px-6 md:px-18">
        {/* Título da Seção */}
        <div className="!flex flex-col items-center !justify-center text-center pt-6 gap-2.5 w-full">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              duration: 0.5,
              delay: 1.4,
              ease: "easeInOut",
            }}
            className="bg-[rgba(104,9,189,0.1)] px-8 py-2 rounded-[20px] text-primary font-releway font-semibold"
          >
            Soft
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              duration: 0.7,
              delay: 2,
              ease: "easeInOut",
            }}
            className="text-white font-releway font-semibold text-4xl"
          >
            Habilidades
          </motion.h1>
        </div>

        <div className="w-full flex justify-center items-center align-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center align-center py-6 md:py-8  gap-5"
          >
            {softSkills.map((softSkill) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  duration: 1,
                  delay: 2.2,
                  ease: "easeInOut",
                }}
                key={softSkill.id}
                className="bg-[rgba(104,9,189,0.1)] px-6 py-6 rounded-[20px] border-1 border-[rgba(104,9,189,0.5)] hover:bg-[rgba(104,9,189,0.3)]"
              >
                <p className="font-semibold text-lg">{softSkill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
