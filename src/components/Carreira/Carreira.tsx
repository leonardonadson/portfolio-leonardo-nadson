const dadosAcademicos = [
  {
    instituicao: "Universidade Federal do Rio Grande do Norte",
    curso: "Bacharelado em Tecnologia da Informação",
    periodo: "2024 - Cursando",
  },
  {
    instituicao:
      "Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte",
    curso: "Técnico em Informática para Internet",
    periodo: "2020 - 2024",
  },
];

const dadosProfissionais = [
  {
    empresa: "Centro de Soluções Aplicadas",
    cargo: ["Desenvolvedor Front-End"],
    periodo: "2023 - 2024",
  },
  {
    empresa: "Centro de Soluções Aplicadas",
    cargo: "Product Owner",
    periodo: "2024 - 2025",
  },
];

const Carreira = () => {
  return (
    <section className="bg-dark2 text-white">
      <div className="bg-[rgba(104,9,189,0.1)] ">
        <div className="container px-6 md:px-4">
          {/* Título da Seção */}
          <div className="!flex flex-col items-center !justify-center text-center pt-6 gap-2.5 w-full">
            <h2 className="bg-[rgba(104,9,189,0.1)] px-8 py-2 rounded-[20px] text-primary font-releway font-semibold" id="trajetoria">
              Carreira
            </h2>
            <h1 className="text-white font-releway font-semibold text-4xl">
              Conheça minha trajetória
            </h1>
          </div>

          <div className="container flex flex-col md:flex-row gap-16 py-8">
            <div className="w-full">
              <h3 className="text-2xl font-semibold ">Acadêmica</h3>

              <div className="flex flex-col md:flex-row flex-wrap gap-4 py-6 justify-between w-full">
                {/* Cards Dinâmicos */}
                {dadosAcademicos.map((dados, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-2 bg-[rgba(104,9,189,0.1)] px-8 py-8 rounded-[20px] border-1 border-[rgba(104,9,189,0.5)] w-full md:w-[48%]"
                  >
                    <p className="font-semibold text-xl">{dados.curso}</p>
                    <p className="font-normal text-[rgba(255,255,255,0.7)]">
                      {dados.instituicao}
                    </p>
                    <p className="font-semibold flex justify-end text-primary">
                      {dados.periodo}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="container flex flex-col md:flex-row gap-16 py-8">
            <div className="w-full">
              <h3 className="text-2xl font-semibold ">Profissional</h3>

              <div className="flex flex-col md:flex-row flex-wrap gap-4 py-6 justify-between w-full">
                {/* Cards Dinâmicos */}
                {dadosProfissionais.map((dados, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-2 bg-[rgba(104,9,189,0.1)] px-8 py-8 rounded-[20px] border-1 border-[rgba(104,9,189,0.5)] w-full md:w-[48%]"
                  >
                    <p className="font-semibold text-xl">{dados.cargo}</p>
                    <p className="font-normal text-[rgba(255,255,255,0.7)]">
                      {dados.empresa}
                    </p>
                    <p className="font-semibold flex justify-end text-primary">
                      {dados.periodo}
                    </p>
                  </div>
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
