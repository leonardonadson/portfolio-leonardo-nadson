import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { useHoverAnimation } from "../../hooks/useHoverAnimation";
import avatar from "../../assets/inicio/bemvindo_avatar.png";
import { useTranslation } from "react-i18next";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Download } from "lucide-react";

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  left: Math.random() * 100,
  delay: Math.random() * 8,
  duration: Math.random() * 6 + 8,
}));

// O prefixo fica estático; só o sufixo é digitado/apagado
const PREFIX_PT = "Desenvolvedor Pleno";
const SUFFIXES_PT = ["Full Stack", "Mobile"];

const PREFIX_EN = "Mid-Level Developer";
const SUFFIXES_EN = ["Full Stack", "Mobile"];

const TYPING_SPEED = 70;
const ERASING_SPEED = 40;
const PAUSE_AFTER_TYPE = 2200;
const PAUSE_AFTER_ERASE = 350;

type Phase = "typing" | "erasing" | "waiting";

function useTypewriter(suffixes: string[]) {
  const [suffix, setSuffix] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");
  const [idx, setIdx] = useState(0);
  const [char, setChar] = useState(0);

  useEffect(() => {
    const current = suffixes[idx];

    if (phase === "typing") {
      if (char < current.length) {
        const t = setTimeout(() => {
          setSuffix(current.slice(0, char + 1));
          setChar((c) => c + 1);
        }, TYPING_SPEED);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("erasing"), PAUSE_AFTER_TYPE);
        return () => clearTimeout(t);
      }
    }

    if (phase === "erasing") {
      if (char > 0) {
        const t = setTimeout(() => {
          setSuffix(current.slice(0, char - 1));
          setChar((c) => c - 1);
        }, ERASING_SPEED);
        return () => clearTimeout(t);
      } else {
        setPhase("waiting");
      }
    }

    if (phase === "waiting") {
      const t = setTimeout(() => {
        setIdx((i) => (i + 1) % suffixes.length);
        setPhase("typing");
      }, PAUSE_AFTER_ERASE);
      return () => clearTimeout(t);
    }
  }, [char, phase, idx, suffixes]);

  // Reset ao trocar idioma
  useEffect(() => {
    setSuffix("");
    setChar(0);
    setPhase("typing");
    setIdx(0);
  }, [suffixes]);

  return suffix;
}

const Inicio = () => {
  const { t, i18n } = useTranslation();
  const isEN = i18n.language === "en";
  const prefix = isEN ? PREFIX_EN : PREFIX_PT;
  const suffixes = isEN ? SUFFIXES_EN : SUFFIXES_PT;
  const displayedSuffix = useTypewriter(suffixes);
  const supportsHover = useHoverAnimation();

  return (
    <section className="bg-dark2 pt-4 pb-8 font-raleway relative overflow-hidden">
      {/* Fundo animado: partículas */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute rounded-full bg-primary/20 animate-float"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.left}%`,
              bottom: "-10px",
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="container flex flex-col-reverse items-center px-4 md:px-18 md:flex-row md:justify-between relative z-10 gap-6 md:gap-0">
        <div className="flex flex-col mt-4 md:mt-0 md:w-1/2 text-center md:text-left gap-2">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.5, delay: 0.4, ease: "easeInOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-1 leading-tight"
          >
            Leonardo<br />Nadson
          </motion.h1>

          {/* Mobile/tablet: prefix em cima, suffix em baixo. Desktop: inline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20, duration: 1, delay: 1, ease: "easeInOut" }}
            className="text-lg md:text-xl text-white/70 mb-4"
          >
            {/* Mobile e tablet: empilhado */}
            <div className="flex flex-col items-center md:items-start lg:hidden">
              <span>{prefix}</span>
              <span className="flex items-center gap-1 h-7">
                <span className="text-primary font-semibold">{displayedSuffix}</span>
                <span className="inline-block w-[2px] h-[1.1em] bg-primary animate-pulse" />
              </span>
            </div>
            {/* Desktop: inline */}
            <div className="hidden lg:flex items-center gap-1">
              <span>{prefix}&nbsp;</span>
              <span className="text-primary font-semibold">{displayedSuffix}</span>
              <span className="inline-block w-[2px] h-[1.1em] bg-primary animate-pulse" />
            </div>
          </motion.div>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {/* Currículo */}
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={supportsHover ? { scale: 1.05, transition: { duration: 0.2 } } : undefined}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20, duration: 1, delay: 1, ease: "easeInOut" }}
              className="bg-primary text-white font-semibold px-5 py-2 rounded-[20px] hover:bg-secondary active:bg-secondary transition-colors duration-200"
            >
              <a
                href="https://drive.google.com/file/d/1rhbXiBcqoxKYf6kCWz4w3GhCto2qfMYX/view?usp=sharing"
                className="flex items-center gap-2 group"
                target="_blank"
              >
                <Download size={18} />
                {t("inicio.curriculo", "Currículo")}
              </a>
            </motion.button>

            {/* WhatsApp */}
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={supportsHover ? { scale: 1.05, transition: { duration: 0.2 } } : undefined}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20, duration: 1, delay: 1.3, ease: "easeInOut" }}
              className="bg-dark text-white border border-primary font-semibold px-5 py-2 rounded-[20px] hover:bg-primary active:bg-secondary transition-colors duration-200"
            >
              <a
                href="https://wa.me/5584988343084"
                className="flex items-center gap-2 group"
                target="_blank"
              >
                <FaWhatsapp size={18} />
                {t("inicio.conversar", "Vamos conversar?")}
              </a>
            </motion.button>

            {/* LinkedIn */}
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={supportsHover ? { scale: 1.05, transition: { duration: 0.2 } } : undefined}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20, duration: 1, delay: 1.6, ease: "easeInOut" }}
              className="bg-dark text-white border border-primary font-semibold px-5 py-2 rounded-[20px] hover:bg-primary active:bg-secondary transition-colors duration-200"
            >
              <a
                href="https://www.linkedin.com/in/leonardonadson/"
                className="flex items-center gap-2 group"
                target="_blank"
              >
                <FaLinkedinIn size={16} />
                {t("inicio.linkedin", "LinkedIn")}
              </a>
            </motion.button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end md:w-1/2">
          <motion.img
            variants={{
              initial: { opacity: 0, y: 50 },
              animate: {
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.5, delay: 0.4, ease: "easeInOut" },
              },
            }}
            initial="initial"
            animate={{ scale: 1, transition: { duration: 0.5 } }}
            whileHover={supportsHover ? { scale: 1.05, transition: { duration: 0.5 } } : undefined}
            whileInView="animate"
            viewport={{ once: true }}
            src={avatar}
            alt="Avatar Leonardo Nadson"
            className="w-[75%] md:w-full md:max-w-[420px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Inicio;
