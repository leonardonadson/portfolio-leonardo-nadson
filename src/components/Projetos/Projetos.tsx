import EXPOTEC from "../../assets/projetos/EXPOTEC.png";
import ENCOM from "../../assets/projetos/ENCOM.png";
import PROFUTURO from "../../assets/projetos/PROFUTURO.png";
import PROFUTUROBI from "../../assets/projetos/PROFUTUROBI.png";
import DIATINF from "../../assets/projetos/DIATINF.png";
import DIREX from "../../assets/projetos/DIREX.png";
import NEPPCON from "../../assets/projetos/NEPPCON.png";
import CURAM from "../../assets/projetos/CURAM.png";
import DIACIN from "../../assets/projetos/DIACIN.png";
import LAMIE from "../../assets/projetos/LAMIE.png";
import GORDON from "../../assets/projetos/GORDON.png";
import CSA from "../../assets/projetos/CSA.png";

import { motion } from "motion/react";

const tagStyles = {
  Online: {
    backgroundColor: "rgba(74, 266, 144, 0.3)",
    color: "#4AE290",
  },
  GitHub: {
    backgroundColor: "#D2C4DE",
    color: "#33085A",
  },
  WordPress: {
    backgroundColor: "rgba(104,9,189,0.1)",
    color: "#6809BD",
  },
  Institucional: {
    backgroundColor: "rgba(104,9,189,0.1)",
    color: "#6809BD",
  },
  Evento: {
    backgroundColor: "rgba(104,9,189,0.1)",
    color: "#6809BD",
  },
};

const listaProjetos = [
  {
    id: 1,
    nome: "EXPOTEC 2024",
    tags: ["Online", "Evento", "WordPress"],
    imagem: EXPOTEC,
    descricao:
      "A Exposição Científica, Tecnológica e Cultural do IFRN Campus Natal Central ",
    link: "https://expotec.cnat.ifrn.edu.br",
  },
  {
    id: 2,
    nome: "ENCOM 2024",
    tags: ["Online", "Evento", "WordPress"],
    imagem: ENCOM,
    descricao:
      "XIV Conferência Nacional em Comunicações, Redes e Segurança da Informação",
    link: "https://encom.ifrn.edu.br",
  },
  {
    id: 3,
    nome: "PROFUTURO",
    tags: ["Online", "Institucional", "WordPress"],
    imagem: PROFUTURO,
    descricao:
      "O ProFuturo é um projeto social com o objetivo de promover o reassentamento de 240 famílias do Rio Grande do Norte",
    link: "https://profuturoifrn.edu.br",
  },
  {
    id: 4,
    nome: "DIATINF",
    tags: ["Online", "Institucional", "WordPress"],
    imagem: DIATINF,
    descricao:
      "A Diretoria Acadêmica de Gestão e Tecnologia da Informação do IFRN Campus Natal Central",
    link: "https://diatinf.ifrn.edu.br",
  },
  {
    id: 5,
    nome: "PROFUTURO BI",
    imagem: PROFUTUROBI,
    tags: ["GitHub", "Institucional", "Django"],
    descricao:
      "O ProFuturo BI é um sistema de Login para a exibição dos dados do PowerBI restrito do Projeto ProFuturo do IFRN",
    link: "https://github.com/leonardonadson/Login-ProFuturo-BI",
  },
  {
    id: 6,
    nome: "LAMIE",
    tags: ["Online", "Institucional", "WordPress"],
    imagem: LAMIE,
    descricao:
      "Laboratório de Manutenção de Instalações Eletricas do IFRN Campus Natal Central",
    link: "https://lamie.cnat.ifrn.edu.br",
  },
  {
    id: 7,
    nome: "CSA",
    tags: ["Online", "Institucional", "WordPress"],
    imagem: CSA,
    descricao:
      "O Núcleo de Extensão e Prática Profissional – Centro de Soluções Aplicadas do IFRN Campus Natal Central ",
    link: "https://csa.cnat.ifrn.edu.br",
  },
  {
    id: 8,
    nome: "DIACIN",
    tags: ["Online", "Institucional", "WordPress"],
    imagem: DIACIN,
    descricao:
      "A Diretoria Acadêmica de Indústria do IFRN Campus Natal Central",
    link: "https://diacin.cnat.ifrn.edu.br",
  },
  {
    id: 9,
    nome: "DIREX",
    tags: ["Online", "Institucional", "WordPress"],
    imagem: DIREX,
    descricao: "A Diretoria de Extensão do IFRN Campus Natal Central ",
    link: "https://direx.cnat.ifrn.edu.br",
  },
  {
    id: 10,
    nome: "NEPPCON",
    tags: ["Online", "Institucional", "WordPress"],
    imagem: NEPPCON,
    descricao:
      "O Núcleo de Extensão e Prática Profissional Em Contrução Cívil do IFRN Campus Natal Central ",
    link: "https://neppcon.cnat.ifrn.edu.br",
  },
  {
    id: 11,
    nome: "CURAM",
    tags: ["GitHub", "Acadêmico", "ReactNative"],
    imagem: CURAM,
    descricao:
      "Aplicativo mobile de integração médica que conecta pacientes com profissionais de saúde licenciados desenvolvido no IFRN Campus Natal Central ",
    link: "https://github.com/leonardonadson/curam-back-end.git",
  },
  {
    id: 12,
    nome: "GORDON STORE",
    tags: ["GitHub", "Acadêmico", "C#"],
    imagem: GORDON,
    descricao:
      "E-commerce web com experiência do usuário totalmente pensada para o público geek desenvolvido no IFRN Campus Natal Central ",
    link: "https://github.com/leonardonadson/gordon-store",
  },
];

const Projetos = () => {
  return (
    <section className="bg-dark2 py-12 text-white">
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
            className="bg-[rgba(104,9,189,0.1)] px-8 py-2 rounded-[20px] text-primary font-releway font-semibold"
            id="projetos"
          >
            Portfólio
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
            className="text-white font-releway font-semibold text-4xl"
          >
            Projetos
          </motion.h1>
        </div>
      </div>

      {/* Renderização Dinâmica dos Cards */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="container md:px-18 flex justify-between flex-wrap xl:gap-6 gap-4 py-10 p-5"
      >
        {listaProjetos.map((projeto) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              duration: 1,
              delay: 0.5, 
              ease: "easeInOut",
            }}
            key={projeto.id}
            className="py-8 px-10 md:py-8 md:px-6 md:flex flex-col xl:flex-row flex-wrap xl:flex-nowrap align-middle flex-start md:items-start xl:items-center  gap-3 xl:gap-8 bg-[rgba(104,9,189,0.1)] rounded-[20px] mx-0 md:mx-0 md:w-[32%] xl:w-[48%]"
          >
            <div className="w-full flex justify-center xl:w-1/2">
              <img src={projeto.imagem} alt={projeto.nome} className="w-full"/>
            </div>
            <div className="flex flex-col gap-4 pt-6 md:p-0 xl:w-1/2">
              <div className="flex xl:flex-nowrap flex-wrap gap-2">
                {projeto.tags.map((tag, index) => (
                  <p
                    key={index}
                    className="text-primary xl:text-sm  md:text-xs  font-semibold px-2 py-1 rounded-[10px] bg-[rgba(104,9,189,0.1)] w-fit"
                    style={tagStyles[tag as keyof typeof tagStyles] || {}}
                  >
                    {tag}
                  </p>
                ))}
              </div>
              <p className="font-bold text-2xl">{projeto.nome}</p>
              <p className="text-[rgba(255,255,255,0.6)]">
                {projeto.descricao}
              </p>
              <motion.button 
              
              whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
              className="bg-primary text-white font-semibold px-5 py-2 rounded-[10px] hover:bg-secondary active:bg-secondary transition w-fit">
                <a
                  href={projeto.link}
                  className="flex items-center gap-2 group "
                  target="_blank"
                >
                  Conferir
                </a>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projetos;
