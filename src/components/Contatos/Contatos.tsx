import Avatar from "../../assets/contatos/conexoes_avatar.png";
import Linkedin from "../../assets/contatos/Linkedin.svg";
import GitHub from "../../assets/hard_skills/Github.svg";
import Email from "../../assets/contatos/Mail.svg";
import WhatsApp from "../../assets/contatos/WhatsApp.svg";

const redes = [
    {
        id: 1,
        name: "Linkedin",
        usuario: "@leonardonadson",
        img: Linkedin,
        link: "https://www.linkedin.com/in/leonardonadson/",
    },
    {
        id: 2,
        name: "GitHub",
        usuario: "@leonardonadson",
        img: GitHub,
        link: "https://github.com/leonardonadson",
    },
    {
        id: 3,
        name: "E-mail",
        usuario: "leonardo.nom@outlook.com",
        img: Email,
        link: "mailto:leonardo.nom@outlook.com",
    },
    {
        id: 4,
        name: "WhatsApp",
        usuario: "(84) 98834-3084",
        img: WhatsApp,
        link: "https://wa.me/5584988343084",
    }
]

const Contatos = () => {
  return (
    <section className="bg-dark2">
      <div className="bg-[rgba(104,9,189,0.1)]">
        <div className="container px-8 py-8 m-0q">
          {/* Título da Seção */}
          <div className="!flex flex-col items-center !justify-center text-center pt-6 gap-2.5 md:w-[48]">
            <h2 className="bg-[rgba(104,9,189,0.1)] px-8 py-2 rounded-[20px] text-primary font-releway font-semibold" id="contatos">
              Contato
            </h2>
            <h1 className="text-white font-releway font-semibold text-4xl">
              Vamos nos conectar!
            </h1>
          </div>

          <div className="w-full flex flex-wrap md:justify-between  items-center align-center m-0">
            <div className="md:w-[48%] w-full px-6 md:py-0 py-8">
                <img src={Avatar} alt="Avatar" className="md:max-w-[500px]"/>
            </div>
            <div className="md:w-[48%] flex flex-col justify-center md:justify-start items-start pl-8 align-center text-white gap-6 md:pl-14 md:px-10">
                {redes.map((rede) => (
                    <div key={rede.id} className="flex gap-4 items-center">
                        <a href={rede.link}>
                            <img src={rede.img} alt={rede.name} className="w-[35px] md:w-[50px]"/>
                        </a>
                        <p className="font-semibold text-md md:text-xl font-inter px-4"><a href={rede.link}>{rede.usuario}</a></p>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contatos;
