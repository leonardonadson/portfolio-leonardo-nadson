import foto_pessoal from "../../assets/sobre/foto_pessoal.png";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Sobre = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-dark2 scroll-mt-20" id="apresentacao">
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
              {t("sobre.badge", "Sobre")}
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
            className="text-white font-releway font-semibold text-4xl">
              {t("sobre.title", "Quem sou")}
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
            src={foto_pessoal} alt="Foto Pessoal" className="w-full"/>
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
              {t("sobre.description", "Sou Leonardo Nadson, desenvolvedor full-stack focado em criar interfaces funcionais e bem estruturadas. Gosto de transformar ideias em código e buscar soluções que façam a diferença. Sempre estou explorando novas tecnologias e aprimorando minhas habilidades para entregar projetos de qualidade.")}
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/leonardonadson/"
                target="_blank"
                className="w-[48px] h-[48px] flex items-center justify-center rounded-xl bg-[rgba(104,9,189,0.15)] border border-[rgba(104,9,189,0.3)] text-primary hover:bg-primary hover:text-white hover:border-primary hover:scale-110 transition-all duration-200"
              >
                <FaLinkedinIn size={22} />
              </a>
              <a
                href="https://github.com/leonardonadson"
                target="_blank"
                className="w-[48px] h-[48px] flex items-center justify-center rounded-xl bg-[rgba(104,9,189,0.15)] border border-[rgba(104,9,189,0.3)] text-primary hover:bg-primary hover:text-white hover:border-primary hover:scale-110 transition-all duration-200"
              >
                <FaGithub size={22} />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Sobre;
