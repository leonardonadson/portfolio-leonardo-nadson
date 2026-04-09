import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { listaProjetos, ProjetoCard } from "../components/Projetos/Projetos";

const CATEGORIAS = ["Todos", "Frontend", "Backend", "Mobile"];

const ProjetosPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [filtro, setFiltro] = useState("Todos");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const projetosFiltrados =
    filtro === "Todos"
      ? listaProjetos
      : listaProjetos.filter((p) => p.categoria === filtro);

  return (
    <main>
      <Header />
      <section className="bg-dark2 py-16 text-white min-h-screen">
        <div className="container px-6 md:px-18">
          {/* Voltar */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/", { state: { scrollTo: "projetos" } })}
            className="flex items-center gap-2 text-white/60 hover:text-primary transition-colors mb-8 text-sm font-semibold"
          >
            <ArrowLeft size={16} />
            {t("projetos.voltar", "Voltar para a home")}
          </motion.button>

          {/* Título */}
          <div className="flex flex-col items-start gap-2.5 mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-[rgba(104,9,189,0.1)] px-8 py-2 rounded-[20px] text-primary font-releway font-semibold"
            >
              {t("projetos.badge", "Portfólio")}
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white font-releway font-semibold text-4xl"
            >
              {t("projetos.title_all", "Todos os Projetos")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-white/50 text-sm"
            >
              {projetosFiltrados.length} {t("projetos.count", "projetos encontrados")}
            </motion.p>
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap gap-2 mb-10">
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
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {projetosFiltrados.map((projeto, i) => (
                <ProjetoCard key={projeto.id} projeto={projeto} index={i} t={t} />
              ))}
            </AnimatePresence>
          </motion.div>

          {projetosFiltrados.length === 0 && (
            <div className="text-center py-20 text-white/40">
              {t("projetos.nenhum", "Nenhum projeto encontrado.")}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ProjetosPage;
