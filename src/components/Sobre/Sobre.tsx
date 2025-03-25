import foto_pessoal from "../../assets/sobre/foto_pessoal.png";
import github from "../../assets/sobre/github.svg";
import linkedin from "../../assets/sobre/linkedin.svg";
import { motion } from "motion/react";

const Sobre = () => {
  return (
    <section className="bg-dark2">
      <div className="bg-[rgba(104,9,189,0.1)] py-12 gap-0">
        {/* Título da Seção */}

        <div className="container px-6 md:px-18">

          <div className="flex flex-col items-start !justify-start pt-6 gap-2.5">
            <motion.h2 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          type: "spring",
                          stiffness: 100,
                          duration: 0.5,
                          delay: 0.4,
                          ease: "easeInOut",
                        }}
            className="bg-[rgba(104,9,189,0.1)] px-8 py-2 rounded-[20px] text-primary font-releway font-semibold">
              Sobre
            </motion.h2>
            <motion.h1 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          type: "spring",
                          stiffness: 100,
                          duration: 0.7,
                          delay: 0.6,
                          ease: "easeInOut",
                        }}
            className="text-white font-releway font-semibold text-4xl" id="apresentacao">
              Quem sou
            </motion.h1>
          </div>

        </div>

        <div className="container flex flex-col md:flex-row gap-16 px-6 md:px-18">

          <div className="flex flex-col items-center md:items-start !justify-center md:w-1/2 ">
            <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              duration: 0.8,
              delay: 1,
              ease: "easeInOut",
            }}
            src={foto_pessoal} alt="Foto Pessoal" className="md:max-w-[500px]"/>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "tween",
              stiffness: 100,
              duration: 0.5,
              delay: 1.3,
              ease: "easeInOut",
            }}
          className="flex flex-col m-auto gap-8 md:w-1/2">
            <p className="text-white font-inter text-xl leading-relaxed md:!leading-loose mt-0 md:mt-30">
              Sou Leonardo Nadson, desenvolvedor full-stack focado em criar
              interfaces funcionais e bem estruturadas. Gosto de transformar
              ideias em código e buscar soluções que façam a diferença. Sempre
              estou explorando novas tecnologias e aprimorando minhas
              habilidades para entregar projetos de qualidade.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/leonardonadson/" className="" target="_blank">
                <img className="w-15 h-15" src={linkedin} alt="Linkedin" />
              </a>
              <a href="https://github.com/leonardonadson" className="" target="_blank">
                <img className="w-15 h-15" src={github} alt="Github"/>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Sobre;
