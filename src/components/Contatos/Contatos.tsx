import Avatar from "../../assets/contatos/conexoes_avatar.png";

import { motion } from "motion/react";
import { useForm, ValidationError } from '@formspree/react';
import { useTranslation } from "react-i18next";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const redes = [
  {
    id: 1,
    name: "Linkedin",
    usuario: "@leonardonadson",
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/in/leonardonadson/",
  },
  {
    id: 2,
    name: "GitHub",
    usuario: "@leonardonadson",
    icon: FaGithub,
    link: "https://github.com/leonardonadson",
  },
  {
    id: 3,
    name: "E-mail",
    usuario: "leonardo.nom@outlook.com",
    icon: MdOutlineEmail,
    link: "mailto:leonardo.nom@outlook.com",
  },
  {
    id: 4,
    name: "WhatsApp",
    usuario: "(84) 98834-3084",
    icon: FaWhatsapp,
    link: "https://wa.me/5584988343084",
  },
];

const Contatos = () => {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("xzdkqerv");

  return (
    <section className="bg-dark2 scroll-mt-20" id="contatos">
      <div className="bg-[rgba(104,9,189,0.1)]">
        <div className="container px-4 md:px-18 py-16">
          {/* Título da Seção */}
          <div className="flex flex-col items-center justify-center text-center gap-2.5 w-full mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.5, delay: 0.2 }}
              className="bg-[rgba(104,9,189,0.1)] px-8 py-2 rounded-[20px] text-primary font-releway font-semibold"
            >
              {t("contato.badge", "Contato")}
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.7, delay: 0.4 }}
              className="text-white font-releway font-semibold text-4xl"
            >
              {t("contato.title", "Vamos nos conectar!")}
            </motion.h1>
          </div>

          {/*
            Layout responsivo com grid:
            - Mobile: 1 coluna (avatar+redes em cima, form abaixo)
            - Tablet (sm–lg): avatar e redes lado a lado em cima, form abaixo (full width)
            - Desktop (lg+): 2 colunas (esquerda: avatar+redes, direita: form)
          */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 lg:items-start">

            {/* Avatar + Redes */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-center sm:items-center lg:items-start gap-8">
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.5 }}
                src={Avatar}
                alt="Avatar"
                className="w-[180px] sm:w-[220px] lg:w-[300px] shrink-0"
              />
              <div className="flex flex-col gap-4">
                {redes.map((rede, index) => {
                  const Icon = rede.icon;
                  return (
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      viewport={{ once: true }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 * index }}
                      key={rede.id}
                      className="flex gap-4 items-center"
                    >
                      <a
                        href={rede.link}
                        className="w-[42px] h-[42px] flex items-center justify-center rounded-xl bg-[rgba(104,9,189,0.15)] border border-[rgba(104,9,189,0.3)] text-primary hover:bg-primary hover:text-white hover:border-primary hover:scale-110 transition-all duration-200"
                        target={rede.link.startsWith("http") ? "_blank" : undefined}
                      >
                        <Icon size={20} />
                      </a>
                      <a
                        href={rede.link}
                        className="font-semibold text-md font-inter text-white hover:text-primary transition-colors"
                        target={rede.link.startsWith("http") ? "_blank" : undefined}
                      >
                        {rede.usuario}
                      </a>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Formulário */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.7 }}
              className="w-full glass-card p-8 lg:p-10"
            >
              <h3 className="text-2xl font-bold text-white mb-6">{t("contato.form_title", "Mande uma mensagem")}</h3>

              {state.succeeded ? (
                <div className="bg-primary/20 text-white border border-primary p-6 rounded-xl text-center">
                  <p className="font-bold text-xl">{t("contato.success_title", "Obrigado pelo contato!")}</p>
                  <p className="text-white/80 mt-2">{t("contato.success_desc", "Retornarei o mais breve possível.")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-white/80 font-semibold text-sm">{t("contato.label_name", "Seu Nome")}</label>
                    <input id="name" type="text" name="name" required
                      className="bg-dark2/50 border border-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder={t("contato.placeholder_name", "Como posso te chamar?")} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-white/80 font-semibold text-sm">{t("contato.label_email", "E-mail")}</label>
                    <input id="email" type="email" name="email" required
                      className="bg-dark2/50 border border-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder={t("contato.placeholder_email", "seu.melhor@email.com")} />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-sm mt-1" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-white/80 font-semibold text-sm">{t("contato.label_message", "Mensagem")}</label>
                    <textarea id="message" name="message" required rows={4}
                      className="bg-dark2/50 border border-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                      placeholder={t("contato.placeholder_message", "Diga o que você achou, ou deixe uma proposta...")} />
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-sm mt-1" />
                  </div>
                  <button type="submit" disabled={state.submitting}
                    className="primary-btn mt-2 w-full text-center py-3 text-lg relative overflow-hidden">
                    {state.submitting ? t("contato.btn_submitting", "Enviando...") : t("contato.btn_submit", "Enviar Mensagem")}
                  </button>
                  <p className="text-white/40 text-xs text-center mt-2">{t("contato.spam_protection", "Protegido automaticamente contra Spam.")}</p>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contatos;
