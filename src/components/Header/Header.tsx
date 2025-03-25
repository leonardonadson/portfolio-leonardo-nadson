import Logo from "../../assets/Logo.svg"

const headeritens =[
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


const Header = () => {
  return (
    <header className="bg-[#0D0917] md:pt-6 md:pb-6 pt-8 pb-8 pl-8 md:pl-2 pr-2sm:p-8 border-solid border-b-[1px] border-[#ECECEC] font-inter font-semibold">
        <section className="container md:px-18 flex justify-between items-center">
            <div className="w-1/2 max-w-35 sm:w-1/6">
            <a href="/"><img src={Logo} alt="Logo"/></a>
            </div>

            <nav className="hidden text-[15px] text-white sm:flex">
                <ul className="flex gap-8">
                    {headeritens.map((item) => (
                        <li key={item.id}>
                            <a className="hover:underline hover:underline-offset-1 hover:decoration-primary hover:decoration-2" 
                            href={item.path}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    </header>
  )
}

export default Header