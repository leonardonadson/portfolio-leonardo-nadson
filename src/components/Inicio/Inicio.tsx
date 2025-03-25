import avatar from "../../assets/inicio/bemvindo_avatar.png";
import WhatsApp from "../../assets/contatos/WhatsApp.svg"
import Download from "../../assets/inicio/Download.svg";

const Inicio = () => {
  return (
    <section className="bg-dark2 pt-4 pb-8 font-raleway">
      <div className="container flex flex-col-reverse items-center md:px-18  md:flex-row md:justify-between">

        <div className="flex flex-col mt-8 md:mt-0 md:w-1/2 text-center md:text-left gap-2">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-2 max-w-xs mx-auto md:mx-0 leading-tight md:!leading-snug">
            Leonardo Nadson
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
            Desenvolvedor Júnior - Full Stack
          </h2>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="bg-primary text-white font-semibold px-5 py-2 rounded-[20px] hover:bg-secondary active:bg-secondary transition">
              <a href="https://drive.google.com/file/d/1GhodCZwCUCB1-w5Vor_mtS69MOfxn-PU/view?usp=sharing" className="flex items-center gap-2 group" target="_blank">
                <img src={Download} alt="Download Icone" />
                Curriculo
              </a>
            </button>

            <button className="bg-dark text-white border border-primary font-semibold px-5 py-2 rounded-[20px] hover:bg-primary active:bg-secondary transition">
              <a href="https://wa.me/5584988343084" className="flex items-center gap-2 group" target="_blank">
                <img className="w-[18.5px] h-[18.5px]" src={WhatsApp} alt="WhatsApp Icone" />
                Vamos conversar?
              </a>
            </button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end md:w-full md:p-8">
          <img
            src={avatar}
            alt="Avatar Leonardo Nadson"
            className="w-[90%] md:w-[75%] md:max-w-[550px] min-h-[219px]"
          />
        </div>

      </div>
    </section>
  );
};

export default Inicio;
