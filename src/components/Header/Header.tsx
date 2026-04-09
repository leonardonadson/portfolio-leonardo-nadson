import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const headeritens = [
    { id: 1, name: t("header.inicio", "Início"), path: "#apresentacao" },
    { id: 2, name: t("header.projetos", "Projetos"), path: "#projetos" },
    { id: 3, name: t("header.carreira", "Trajetória"), path: "#trajetoria" },
    { id: 4, name: t("header.skills", "Skills"), path: "#skills" },
    { id: 5, name: t("header.contato", "Contatos"), path: "#contatos" }
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="bg-[#0D0917] md:pt-6 md:pb-6 pt-8 pb-8 pl-8 md:pl-2 pr-2 sm:p-8 border-solid border-b-[1px] border-[#ECECEC]/20 font-inter font-semibold sticky top-0 z-40">
      <section className="container md:px-18 flex justify-between items-center">
        <div className="w-1/2 max-w-35 sm:w-1/6">
          <a href="/">
            <img src={Logo} alt="Logo" />
          </a>
        </div>

        {/* Navegação Desktop */}
        <nav className="hidden sm:flex text-[15px] text-white items-center gap-8">
          <ul className="flex gap-8">
            {headeritens.map((item) => (
              <li key={item.id}>
                <a
                  className="hover:underline hover:underline-offset-4 hover:decoration-primary hover:decoration-2 transition-all"
                  href={item.path}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          
          <button 
            onClick={toggleLanguage} 
            className="flex items-center gap-2 cursor-pointer hover:bg-white/10 transition-colors bg-white/5 border border-white/10 px-4 py-1.5 rounded-full"
          >
            <span className="text-lg">{i18n.language === 'pt' ? '🇧🇷' : '🇺🇸'}</span>
            <span className="uppercase text-sm font-bold tracking-widest">{i18n.language.toUpperCase()}</span>
          </button>
        </nav>

        {/* Botão de alternância Mobile */}
        <div className="sm:hidden flex items-center gap-4 pr-6">
            <button 
                onClick={toggleLanguage} 
                className="flex items-center gap-2 cursor-pointer text-white hover:bg-white/10 transition-colors bg-[rgba(255,255,255,0.05)] border border-white/10 px-3 py-1.5 rounded-full"
            >
                <span className="text-md">{i18n.language === 'pt' ? '🇧🇷' : '🇺🇸'}</span>
                <span className="uppercase text-xs font-bold">{i18n.language.toUpperCase()}</span>
            </button>
            <button
              className="text-white cursor-pointer hover:text-primary transition-colors ml-2"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={32} />
            </button>
        </div>
      </section>

      {/* Fundo do Menu Mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 sm:hidden cursor-pointer"
          />
        )}
      </AnimatePresence>

      {/* Gaveta lateral Mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed top-0 right-0 h-full w-72 bg-[#0D0917] border-l border-white/10 shadow-2xl sm:hidden flex flex-col items-center pt-8 px-6 gap-8 z-[60] overflow-y-auto"
          >
            <div className="w-full flex justify-end pr-4">
              <button 
                className="text-white cursor-pointer hover:text-primary transition-colors bg-[rgba(255,255,255,0.05)] p-1.5 rounded-full border border-[rgba(255,255,255,0.1)]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col gap-6 w-full mt-4">
              {headeritens.map((item, index) => (
                <motion.a
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + (index * 0.1) }}
                  key={item.id}
                  href={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white text-xl font-medium hover:text-primary transition-colors border-b border-[rgba(255,255,255,0.05)] pb-4 text-center"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Alternador de idioma dentro do menu Mobile */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-auto mb-10 w-full flex flex-col items-center justify-center gap-3 border-t border-[rgba(255,255,255,0.05)] pt-6"
            >
              <span className="text-white/40 text-xs">Ajustes</span>
              <button 
                onClick={toggleLanguage} 
                className="flex items-center justify-center gap-2 w-full max-w-[160px] cursor-pointer text-white hover:bg-white/10 transition-colors bg-[rgba(255,255,255,0.05)] border border-white/10 px-4 py-2 rounded-full"
              >
                <span className="text-xl">{i18n.language === 'pt' ? '🇧🇷' : '🇺🇸'}</span>
                <span className="uppercase text-sm font-bold">{i18n.language === 'pt' ? 'PT-BR' : 'EN-US'}</span>
              </button>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;