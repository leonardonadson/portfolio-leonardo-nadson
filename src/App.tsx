import Header from "./components/Header/Header"
import Inicio from "./components/Inicio/Inicio"
import Projetos from "./components/Projetos/Projetos"
import Sobre from "./components/Sobre/Sobre"
import './index.css'


export const App = () => {
  return (
    <main>
      <Header/>
      <Inicio/>
      <Sobre/>
      <Projetos/>
    </main>
  )
}
