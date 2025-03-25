import Avatar from "../../assets/contatos/conexoes_avatar.png";
import Linkedin from "../../assets/contatos/Linkedin.svg";
import GitHub from "../../assets/hard_skills/Github.svg";
import Email from "../../assets/contatos/Mail.svg";
import WhatsApp from "../../assets/contatos/WhatsApp.svg";

import { motion } from "motion/react";

const redes = [
  {
    id: 1,
    name: "Linkedin",
    usuario: "@leonardonadson",
    img: Linkedin,
    link: "https://www.linkedin.com/in/leonardonadson/",
  },
  {
    id: 2,
    name: "GitHub",
    usuario: "@leonardonadson",
    img: GitHub,
    link: "https://github.com/leonardonadson",
  },
  {
    id: 3,
    name: "E-mail",
    usuario: "leonardo.nom@outlook.com",
    img: Email,
    link: "mailto:leonardo.nom@outlook.com",
  },
  {
    id: 4,
    name: "WhatsApp",
    usuario: "(84) 98834-3084",
    img: WhatsApp,
    link: "https://wa.me/5584988343084",
  },
];

const Contatos = () => {
  return (
    <section className="bg-dark2">
      <div className="bg-[rgba(104,9,189,0.1)]">
        <div className="container md:px-18 py-8">
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
              id="contatos"
            >
              Contato
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
              Vamos nos conectar!
            </motion.h1>
          </div>

          <div className="w-full flex flex-wrap md:justify-between  items-center align-center m-0">
            <div className="md:w-[48%] w-full px-6 md:py-0 py-8">
              <motion.img
                variants={{
                  initial: {
                    opacity: 0,
                    y: 50,
                  },
                  animate: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      duration: 0.5,
                      delay: 0.4,
                      ease: "easeInOut",
                    },
                  },
                }}
                initial="initial"
                animate={{ scale: 1, transition: { duration: 0.5 } }}
                whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
                whileInView="animate"
                viewport={{ once: true }}
                src={Avatar}
                alt="Avatar"
                className="md:max-w-[500px]"
              />
            </div>
            <motion.div 
            
            className="md:w-[48%] flex flex-col justify-center md:justify-start items-start pl-8 align-center text-white gap-6 md:pl-14 md:px-10">
              {redes.map((rede, index) => (
                <motion.div 
                initial={{ opacity: 0, x: 50 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              duration: 1,
              delay: 1 + index * 0.2, 
              ease: "easeInOut",
            }}
                key={rede.id} className="flex gap-4 items-center">
                  <a href={rede.link}>
                    <img
                      src={rede.img}
                      alt={rede.name}
                      className="w-[35px] md:w-[50px]"
                    />
                  </a>
                  <p className="font-semibold text-md md:text-xl font-inter px-4">
                    <a href={rede.link}>{rede.usuario}</a>
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contatos;
