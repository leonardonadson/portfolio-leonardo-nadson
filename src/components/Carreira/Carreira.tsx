import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { GraduationCap, Briefcase } from "lucide-react";

type Item = {
  titulo: string;
  subtitulo: string;
  periodo: string;
};

const dadosAcademicos: Item[] = [
  {
    titulo: "Técnico em Informática para Internet",
    subtitulo: "IFRN",
    periodo: "2020 - 2024",
  },
  {
    titulo: "Bacharelado em Tecnologia da Informação",
    subtitulo: "UFRN",
    periodo: "2024 - Cursando",
  },
];

const dadosProfissionais: Item[] = [
  {
    titulo: "Desenvolvedor Full-Stack",
    subtitulo: "Centro de Soluções Aplicadas",
    periodo: "2023 - 2024",
  },
  {
    titulo: "Tech Leader",
    subtitulo: "Centro de Soluções Aplicadas",
    periodo: "2024 - 2025",
  },
  {
    titulo: "Desenvolvedor Mobile",
    subtitulo: "Intellissis Sistemas Inteligentes",
    periodo: "2025 - 2026",
  },
  {
    titulo: "Desenvolvedor Mobile",
    subtitulo: "Agiltec Soluções em TI",
    periodo: "2025 - Atual",
  },
];

const COLS = 3;

interface SnakeTimelineProps {
  items: Item[];
  icon: React.ElementType;
  color: string; // classe tailwind de cor de fundo do marcador
  baseDelay?: number;
}

const SnakeTimeline = ({ items, icon: Icon, color, baseDelay = 0 }: SnakeTimelineProps) => {
  // Divide os itens em linhas de COLS colunas
  const rows: Item[][] = [];
  for (let i = 0; i < items.length; i += COLS) {
    rows.push(items.slice(i, i + COLS));
  }

  return (
    <div className="relative">
      {rows.map((row, rowIdx) => {
        const isRTL = rowIdx % 2 === 1;
        const displayItems = isRTL ? [...row].reverse() : row;
        const isLastRow = rowIdx === rows.length - 1;

        const colCount = row.length;
        const leftEnd = `calc(100% / ${2 * COLS})`;
        const rightEnd = `calc(100% - 100% / ${2 * COLS})`;

        return (
          <div
            key={rowIdx}
            className={`relative ${!isLastRow ? "pb-14" : ""}`}
          >
            {/* Conector horizontal */}
            {colCount > 1 && (() => {
              const partialRight = `calc(100% * ${COLS - colCount} / ${COLS} + 100% / ${2 * COLS})`;
              const lineStyle: React.CSSProperties =
                colCount < COLS
                  ? isRTL
                    ? { top: "20px", left: partialRight, right: `calc(100% - ${rightEnd})` }
                    : { top: "20px", left: leftEnd, right: partialRight }
                  : { top: "20px", left: leftEnd, right: `calc(100% - ${rightEnd})` };
              return <div className="absolute h-px bg-primary/35 z-0" style={lineStyle} />;
            })()}

            {/* Conector vertical para a próxima linha — LTR termina à direita, RTL termina à esquerda */}
            {!isLastRow && (
              <div
                className="absolute w-px bg-primary/35 z-0"
                style={{
                  top: "20px",
                  bottom: 0,
                  ...(isRTL
                    ? { left: leftEnd }
                    : { right: leftEnd }),
                }}
              />
            )}

            <div className="grid grid-cols-3 gap-4 md:gap-6">
              {/* Linhas parciais RTL: adiciona espaço ANTES para os itens aparecerem nas colunas mais à direita */}
              {isRTL && Array.from({ length: COLS - displayItems.length }).map((_, k) => (
                <div key={`pad-${k}`} />
              ))}

              {displayItems.map((item, i) => (
                <motion.div
                  key={`${item.periodo}-${item.subtitulo}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    delay: baseDelay + 0.1 * i + 0.15 * rowIdx,
                  }}
                  className="flex flex-col items-center gap-3 relative z-10"
                >
                  {/* Marcador */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shadow-[0_0_14px_rgba(104,9,189,0.7)] flex-shrink-0 ${color}`}
                  >
                    <Icon size={15} className="text-white" />
                  </div>

                  {/* Cartão */}
                  <div className="glass-card p-3 md:p-4 w-full text-center">
                    <span className="inline-block bg-[rgba(104,9,189,0.15)] text-[#a855f7] font-bold px-2 py-0.5 rounded text-xs mb-2">
                      {item.periodo}
                    </span>
                    <p className="font-semibold text-white text-xs md:text-sm leading-snug">
                      {item.titulo}
                    </p>
                    <p className="text-white/55 text-xs mt-1">{item.subtitulo}</p>
                  </div>
                </motion.div>
              ))}

              {/* Linhas parciais LTR: adiciona espaço DEPOIS */}
              {!isRTL && Array.from({ length: COLS - displayItems.length }).map((_, k) => (
                <div key={`pad-${k}`} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Carreira = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-dark2 text-white scroll-mt-20" id="trajetoria">
      <div className="bg-[rgba(104,9,189,0.05)]">
        <div className="container px-6 md:px-18 py-16">
          {/* Título */}
          <div className="flex flex-col items-center justify-center text-center gap-2.5 w-full mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              className="bg-[rgba(104,9,189,0.1)] px-8 py-2 rounded-[20px] text-primary font-releway font-semibold"
            >
              {t("carreira.badge", "Carreira")}
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
              className="text-white font-releway font-semibold text-4xl"
            >
              {t("carreira.title", "Conheça minha trajetória")}
            </motion.h1>
          </div>

          <div className="flex flex-col gap-16 max-w-5xl mx-auto">
            {/* Acadêmica */}
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-xl font-bold mb-8 text-white/90 flex items-center gap-3"
              >
                <GraduationCap className="text-primary w-6 h-6" />
                {t("carreira.academica", "Acadêmica")}
              </motion.h3>

              {/* Desktop snake */}
              <div className="hidden md:block">
                <SnakeTimeline
                  items={dadosAcademicos}
                  icon={GraduationCap}
                  color="bg-dark2 border-2 border-primary"
                  baseDelay={0.1}
                />
              </div>

              {/* Mobile: vertical */}
              <div className="md:hidden relative border-l-2 border-primary/40 ml-4 pl-5 space-y-6">
                {dadosAcademicos.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.1 * i }}
                    className="relative glass-card p-4"
                  >
                    <span className="absolute -left-[27px] top-4 w-4 h-4 bg-dark2 border-2 border-primary rounded-full ring-4 ring-dark2" />
                    <span className="inline-block bg-[rgba(104,9,189,0.15)] text-[#a855f7] font-bold px-2 py-0.5 rounded text-xs mb-1">
                      {item.periodo}
                    </span>
                    <p className="font-semibold text-white text-sm">{item.titulo}</p>
                    <p className="text-white/55 text-xs mt-0.5">{item.subtitulo}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Profissional */}
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-xl font-bold mb-8 text-white/90 flex items-center gap-3"
              >
                <Briefcase className="text-primary w-6 h-6" />
                {t("carreira.profissional", "Profissional")}
              </motion.h3>

              {/* Desktop snake */}
              <div className="hidden md:block">
                <SnakeTimeline
                  items={dadosProfissionais}
                  icon={Briefcase}
                  color="bg-primary"
                  baseDelay={0.1}
                />
              </div>

              {/* Mobile: vertical */}
              <div className="md:hidden relative border-l-2 border-primary/40 ml-4 pl-5 space-y-6">
                {dadosProfissionais.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.1 * i }}
                    className="relative glass-card p-4"
                  >
                    <span className="absolute -left-[27px] top-4 w-4 h-4 bg-primary rounded-full ring-4 ring-dark2 shadow-[0_0_8px_#6809BD]" />
                    <span className="inline-block bg-[rgba(104,9,189,0.15)] text-[#a855f7] font-bold px-2 py-0.5 rounded text-xs mb-1">
                      {item.periodo}
                    </span>
                    <p className="font-semibold text-white text-sm">{item.titulo}</p>
                    <p className="text-white/55 text-xs mt-0.5">{item.subtitulo}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carreira;
