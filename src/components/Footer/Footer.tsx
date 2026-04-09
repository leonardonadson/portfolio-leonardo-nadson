import Logo from "../../assets/Logo.svg";
import { useTranslation } from "react-i18next";
import { FaLinkedinIn, FaInstagram, FaGlobe } from "react-icons/fa";

const footeredes = [
  {
    id: 1,
    name: "Linkedin",
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/in/leonardonadson/",
  },
  {
    id: 2,
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/leonadsom/",
  },
  {
    id: 3,
    name: "Site",
    icon: FaGlobe,
    link: "https://leonardonadson.github.io/",
  },
];

const Footer = () => {
  const { t } = useTranslation();

  const footeritens = [
    { id: 1, name: t("header.inicio", "Início"), path: "#apresentacao" },
    { id: 2, name: t("header.projetos", "Projetos"), path: "#projetos" },
    { id: 3, name: t("header.carreira", "Trajetória"), path: "#trajetoria" },
    { id: 4, name: t("header.skills", "Skills"), path: "#skills" },
    { id: 5, name: t("header.contato", "Contatos"), path: "#contatos" },
  ];

  return (
    <footer className="bg-[#0D0917] border-solid border-t-[1px] border-[#ECECEC]/20 font-inter font-semibold">
      <section className="bg-[rgba(104,9,189,0.1)]">
        <div className="container flex flex-col justify-between items-start md:px-18 md:pt-6 md:pb-6 py-10 px-8 sm:p-8">

          <div className="w-full flex flex-wrap justify-between items-center align-center">
            <div className="w-1/2 max-w-35 sm:w-1/6">
              <a href="/">
                <img src={Logo} alt="Logo" />
              </a>
            </div>

            <div className="w-1/2">
              <nav>
                <ul className="flex gap-4 justify-end">
                  {footeredes.map((rede) => {
                    const Icon = rede.icon;
                    return (
                      <li key={rede.id}>
                        <a
                          href={rede.link}
                          target="_blank"
                          className="w-[40px] h-[40px] flex items-center justify-center rounded-xl bg-[rgba(104,9,189,0.15)] border border-[rgba(104,9,189,0.3)] text-primary hover:bg-primary hover:text-white hover:border-primary hover:scale-110 transition-all duration-200"
                        >
                          <Icon size={18} />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>

          <nav className="text-lg text-white sm:flex">
            <ul className="flex flex-wrap flex-row gap-4 py-6">
              {footeritens.map((item) => (
                <li key={item.id}>
                  <a
                    className="hover:underline hover:underline-offset-1 hover:decoration-primary hover:decoration-2"
                    href={item.path}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
