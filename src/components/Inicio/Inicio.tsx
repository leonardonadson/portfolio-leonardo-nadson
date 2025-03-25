import { motion } from "motion/react";
import avatar from "../../assets/inicio/bemvindo_avatar.png";
import WhatsApp from "../../assets/contatos/WhatsApp.svg";
import Download from "../../assets/inicio/Download.svg";

const Inicio = () => {
  return (
    <section className="bg-dark2 pt-4 pb-8 font-raleway">
      <div className="container flex flex-col-reverse items-center md:px-18  md:flex-row md:justify-between">
        <div className="flex flex-col mt-8 md:mt-0 md:w-1/2 text-center md:text-left gap-2">
          <motion.h1
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
            className="text-5xl md:text-6xl font-bold text-white mb-2 max-w-xs mx-auto md:mx-0 leading-tight md:!leading-snug"
          >
            Leonardo Nadson
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              duration: 1,
              delay: 1,
              ease: "easeInOut",
            }}
            className="text-xl md:text-2xl text-gray-300 mb-6"
          >
            Desenvolvedor Júnior - Full Stack
          </motion.h2>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                duration: 1,
                delay: 1,
                ease: "easeInOut",
              }}
              className="bg-primary text-white font-semibold px-5 py-2 rounded-[20px] hover:bg-secondary active:bg-secondary transition"
            >
              <a
                href="https://drive.google.com/file/d/1GhodCZwCUCB1-w5Vor_mtS69MOfxn-PU/view?usp=sharing"
                className="flex items-center gap-2 group"
                target="_blank"
              >
                <img src={Download} alt="Download Icone" />
                Curriculo
              </a>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                duration: 1,
                delay: 1.3,
                ease: "easeInOut",
              }}
              className="bg-dark text-white border border-primary font-semibold px-5 py-2 rounded-[20px] hover:bg-primary active:bg-secondary transition"
            >
              <a
                href="https://wa.me/5584988343084"
                className="flex items-center gap-2 group"
                target="_blank"
              >
                <img
                  className="w-[18.5px] h-[18.5px]"
                  src={WhatsApp}
                  alt="WhatsApp Icone"
                />
                Vamos conversar?
              </a>
            </motion.button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end md:w-full md:p-8">
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
            src={avatar}
            alt="Avatar Leonardo Nadson"
            className="w-[90%] md:w-[75%] md:max-w-[550px] min-h-[219px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Inicio;
