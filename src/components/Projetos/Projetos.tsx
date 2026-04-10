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

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  SiGithub,
  SiWordpress,
  SiDjango,
  SiReact,
  SiSharp,
} from "react-icons/si";
import { ExternalLink, ArrowRight, Lock, Archive } from "lucide-react";

export type Projeto = {
  id: number;
  nome: string;
  tags: string[];
  categoria: string;
  imagem: string;
  descricao: string;
  link: string;
};

export const listaProjetos: Projeto[] = [
  {
    id: 1,
    nome: "EXPOTEC 2024",
    tags: ["Online", "Frontend", "WordPress"],
    categoria: "Frontend",
    imagem: EXPOTEC,
    descricao: "A Exposição Científica, Tecnológica e Cultural do IFRN Campus Natal Central",
    link: "https://expotec.cnat.ifrn.edu.br",
  },
  {
    id: 2,
    nome: "ENCOM 2024",
    tags: ["Online", "Frontend", "WordPress"],
    categoria: "Frontend",
    imagem: ENCOM,
    descricao: "XIV Conferência Nacional em Comunicações, Redes e Segurança da Informação",
    link: "https://encom.ifrn.edu.br",
  },
  {
    id: 3,
    nome: "PROFUTURO",
    tags: ["Online", "Frontend", "WordPress"],
    categoria: "Frontend",
    imagem: PROFUTURO,
    descricao: "O ProFuturo é um projeto social com o objetivo de promover o reassentamento de 240 famílias do Rio Grande do Norte",
    link: "https://profuturo.ifrn.edu.br",
  },
  {
    id: 4,
    nome: "DIATINF",
    tags: ["Online", "Frontend", "WordPress"],
    categoria: "Frontend",
    imagem: DIATINF,
    descricao: "A Diretoria Acadêmica de Gestão e Tecnologia da Informação do IFRN Campus Natal Central",
    link: "https://diatinf.ifrn.edu.br",
  },
  {
    id: 5,
    nome: "PROFUTURO BI",
    tags: ["GitHub", "Backend", "Django"],
    categoria: "Backend",
    imagem: PROFUTUROBI,
    descricao: "O ProFuturo BI é um sistema de Login para a exibição dos dados do PowerBI restrito do Projeto ProFuturo do IFRN",
    link: "https://github.com/leonardonadson/Login-ProFuturo-BI",
  },
  {
    id: 6,
    nome: "LAMIE",
    tags: ["Online", "Frontend", "WordPress"],
    categoria: "Frontend",
    imagem: LAMIE,
    descricao: "Laboratório de Manutenção de Instalações Elétricas do IFRN Campus Natal Central",
    link: "https://lamie.cnat.ifrn.edu.br",
  },
  {
    id: 7,
    nome: "CSA",
    tags: ["Online", "Frontend", "WordPress"],
    categoria: "Frontend",
    imagem: CSA,
    descricao: "O Núcleo de Extensão e Prática Profissional – Centro de Soluções Aplicadas do IFRN Campus Natal Central",
    link: "https://csa.cnat.ifrn.edu.br",
  },
  {
    id: 8,
    nome: "DIACIN",
    tags: ["Online", "Frontend", "WordPress"],
    categoria: "Frontend",
    imagem: DIACIN,
    descricao: "A Diretoria Acadêmica de Indústria do IFRN Campus Natal Central",
    link: "https://diacin.cnat.ifrn.edu.br",
  },
  {
    id: 9,
    nome: "DIREX",
    tags: ["Online", "Frontend", "WordPress"],
    categoria: "Frontend",
    imagem: DIREX,
    descricao: "A Diretoria de Extensão do IFRN Campus Natal Central",
    link: "https://direx.cnat.ifrn.edu.br",
  },
  {
    id: 10,
    nome: "NEPPCON",
    tags: ["Online", "Frontend", "WordPress"],
    categoria: "Frontend",
    imagem: NEPPCON,
    descricao: "O Núcleo de Extensão e Prática Profissional Em Construção Civil do IFRN Campus Natal Central",
    link: "https://neppcon.cnat.ifrn.edu.br",
  },
  {
    id: 11,
    nome: "CURAM",
    tags: ["GitHub", "Mobile", "ReactNative"],
    categoria: "Mobile",
    imagem: CURAM,
    descricao: "Aplicativo mobile de integração médica que conecta pacientes com profissionais de saúde licenciados desenvolvido no IFRN Campus Natal Central",
    link: "https://github.com/leonardonadson/curam-back-end.git",
  },
  {
    id: 12,
    nome: "GORDON STORE",
    tags: ["GitHub", "Frontend", "C#"],
    categoria: "Frontend",
    imagem: GORDON,
    descricao: "E-commerce web com experiência do usuário totalmente pensada para o público geek desenvolvido no IFRN Campus Natal Central",
    link: "https://github.com/leonardonadson/gordon-store",
  },
];

// Ordem de exibição das tags: 1. Status  2. Categoria  3. Linguagem/tecnologia
const tagIconMap: Record<string, React.ElementType | null> = {
  // Status
  Online: ExternalLink,
  GitHub: SiGithub,
  Privado: Lock,
  Descontinuado: Archive,
  // Categoria
  Frontend: null,
  Backend: null,
  Mobile: null,
  // Linguagem / tecnologia
  WordPress: SiWordpress,
  Django: SiDjango,
  ReactNative: SiReact,
  "C#": SiSharp,
};

const tagColorMap: Record<string, { bg: string; text: string }> = {
  // Status
  Online: { bg: "rgba(74,226,144,0.2)", text: "#4AE290" },
  GitHub: { bg: "rgba(255,255,255,0.1)", text: "#ffffff" },
  Privado: { bg: "rgba(239,68,68,0.15)", text: "#f87171" },
  Descontinuado: { bg: "rgba(113,113,122,0.2)", text: "#a1a1aa" },
  // Categoria
  Frontend: { bg: "rgba(251,146,60,0.15)", text: "#fb923c" },
  Backend: { bg: "rgba(34,197,94,0.15)", text: "#22c55e" },
  Mobile: { bg: "rgba(56,189,248,0.15)", text: "#38bdf8" },
  // Linguagem / tecnologia
  WordPress: { bg: "rgba(33,117,155,0.2)", text: "#21759B" },
  Django: { bg: "rgba(9,46,32,0.4)", text: "#44b78b" },
  ReactNative: { bg: "rgba(97,218,251,0.15)", text: "#61DAFB" },
  "C#": { bg: "rgba(81,43,212,0.2)", text: "#9b7efd" },
};

interface TagBadgeProps {
  tag: string;
}

const TagBadge = ({ tag }: TagBadgeProps) => {
  const Icon = tagIconMap[tag];
  const style = tagColorMap[tag] || { bg: "rgba(104,9,189,0.15)", text: "#a855f7" };
  return (
    <span
      className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg"
      style={{ backgroundColor: style.bg, color: style.text }}
    >
      {Icon && <Icon size={11} />}
      {tag}
    </span>
  );
};

interface ProjetoCardProps {
  projeto: Projeto;
  index: number;
  t: (key: string, fallback: string) => string;
}

export const ProjetoCard = ({ projeto, index, t }: ProjetoCardProps) => {
  const isGithub = projeto.tags.includes("GitHub");
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.05 * index }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="project-card flex flex-col"
    >
      {/* Imagem */}
      <div className="relative overflow-hidden">
        <img
          src={projeto.imagem}
          alt={projeto.nome}
          className="w-full aspect-video object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,9,23,0.7)] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col flex-1 gap-3 p-5">
        <div className="flex flex-wrap gap-1.5">
          {projeto.tags.map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </div>

        <p className="font-bold text-xl text-white">{projeto.nome}</p>
        <p className="text-white/60 text-sm leading-relaxed line-clamp-2 flex-1">
          {t(`projetos.desc_${projeto.id}`, projeto.descricao)}
        </p>

        <motion.a
          whileHover={{ scale: 1.03, transition: { duration: 0.15 } }}
          href={projeto.link}
          target="_blank"
          className="flex items-center gap-2 w-fit mt-1 bg-primary text-white font-semibold px-4 py-2 rounded-[10px] hover:bg-secondary transition-colors duration-200 text-sm"
        >
          {isGithub ? <SiGithub size={14} /> : <ExternalLink size={14} />}
          {isGithub ? t("projetos.ver_github", "Ver no GitHub") : t("projetos.conferir", "Conferir")}
        </motion.a>
      </div>
    </motion.div>
  );
};

const CATEGORIAS = ["Todos", "Frontend", "Backend", "Mobile"];
const HOME_LIMIT = 6;

const Projetos = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [filtro, setFiltro] = useState("Todos");

  const projetosFiltrados = filtro === "Todos"
    ? listaProjetos.slice(0, HOME_LIMIT)
    : listaProjetos.filter((p) => p.categoria === filtro).slice(0, HOME_LIMIT);

  return (
    <section className="bg-dark2 py-12 text-white scroll-mt-20" id="projetos">
      <div className="container px-6 md:px-18">
        {/* Título */}
        <div className="flex flex-col items-start gap-2.5 pt-6 mb-8">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.4 }}
            className="bg-[rgba(104,9,189,0.1)] px-8 py-2 rounded-[20px] text-primary font-releway font-semibold"
          >
            {t("projetos.badge", "Portfólio")}
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.55 }}
            className="text-white font-releway font-semibold text-4xl"
          >
            {t("projetos.title", "Projetos")}
          </motion.h1>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIAS.map((cat) => (
            <button
              key={cat}
              onClick={() => setFiltro(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                filtro === cat
                  ? "bg-primary text-white shadow-[0_4px_14px_rgba(104,9,189,0.4)]"
                  : "bg-[rgba(104,9,189,0.08)] border border-[rgba(104,9,189,0.25)] text-white/70 hover:border-[rgba(104,9,189,0.5)] hover:text-white"
              }`}
            >
              {t(`projetos.cat_${cat.toLowerCase()}`, cat)}
            </button>
          ))}
        </div>

        {/* Grid de cards */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {projetosFiltrados.map((projeto, i) => (
              <ProjetoCard key={projeto.id} projeto={projeto} index={i} t={t} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Ver todos */}
        <div className="flex justify-center mt-10">
          <motion.button
            whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
            onClick={() => navigate("/projetos")}
            className="flex items-center gap-2 primary-btn text-base"
          >
            {t("projetos.ver_todos", "Ver todos os projetos")}
            <ArrowRight size={18} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Projetos;
