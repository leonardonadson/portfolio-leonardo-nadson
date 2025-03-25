import Logo from "../../assets/Logo.svg";
import Instagram from "../../assets/footer/Instagram.svg";
import Linkedin from "../../assets/footer/Linkedin.svg";
import Site from "../../assets/footer/Site.svg";

const footeritens =[
  {
      id: 1,
      name: "Apresentação",
      path: "#apresentacao"
  },
  {
      id: 2,
      name: "Projetos",
      path: "#projetos"
  },
  {
      id: 3,
      name: "Trajetória",
      path: "#trajetoria"
  },
  {
      id: 4,
      name: "Skills",
      path: "#skills"
  },
  {
      id: 5,
      name: "Contatos",
      path: "#contatos"
  }
]

const footeredes = [
  {
    id: 1,
    name: "Linkedin",
    img: Linkedin,
    link: "https://www.linkedin.com/in/leonardonadson/",
  },
  {
    id: 2,
    name: "Instagram",
    img: Instagram,
    link: "https://www.instagram.com/leonadsom/",
  },
  {
    id: 3,
    name: "Site",
    img: Site,
    link: "https://leonardonadson.github.io/",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#0D0917] border-solid border-t-[1px] border-[#ECECEC] font-inter font-semibold">
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
                <ul className="flex gap-8 justify-end :hover-decoration-primary active:decoration-primary">
                  {footeredes.map((rede) => (
                    <li key={rede.id}>
                      <a href={rede.link}>
                        <img
                          src={rede.img}
                          alt={rede.name}
                          className="w-[25px] md:w-[40px]"
                        />
                      </a>
                    </li>
                  ))}
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
