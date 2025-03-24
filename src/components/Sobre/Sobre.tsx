import foto_pessoal from "../../assets/sobre/foto_pessoal.png";
import github from "../../assets/sobre/github.svg";
import linkedin from "../../assets/sobre/linkedin.svg";
const Sobre = () => {
  return (
    <section className="bg-dark2">
      <div className="bg-[rgba(104,9,189,0.1)] py-12 gap-0">
        {/* Título da Seção */}

        <div className="container px-6 md:px-4">

          <div className="flex flex-col items-start !justify-start pt-6 gap-2.5">
            <h2 className="bg-[rgba(104,9,189,0.1)] px-8 py-2 rounded-[20px] text-primary font-releway font-semibold">
              Sobre
            </h2>
            <h1 className="text-white font-releway font-semibold text-4xl" id="apresentacao">
              Quem sou
            </h1>
          </div>

        </div>

        <div className="container flex flex-col md:flex-row gap-16 px-6 md:px-4">

          <div className="flex flex-col items-center md:items-start !justify-center md:w-1/2 ">
            <img  src={foto_pessoal} alt="Foto Pessoal" />
          </div>

          <div className="flex flex-col m-auto gap-8 md:w-1/2">
            <p className="text-white font-inter text-xl leading-relaxed md:!leading-loose mt-0 md:mt-30">
              Sou Leonardo Nadson, desenvolvedor full-stack focado em criar
              interfaces funcionais e bem estruturadas. Gosto de transformar
              ideias em código e buscar soluções que façam a diferença. Sempre
              estou explorando novas tecnologias e aprimorando minhas
              habilidades para entregar projetos de qualidade.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/leonardonadson/" className="" target="_blank">
                <img className="w-15 h-15" src={linkedin} alt="Linkedin" />
              </a>
              <a href="https://github.com/leonardonadson" className="" target="_blank">
                <img className="w-15 h-15" src={github} alt="Github"/>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Sobre;
