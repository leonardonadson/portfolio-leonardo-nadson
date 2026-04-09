import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Header from "./components/Header/Header"
import Inicio from "./components/Inicio/Inicio"
import Projetos from "./components/Projetos/Projetos"
import Sobre from "./components/Sobre/Sobre"
import Carreira from "./components/Carreira/Carreira"
import Skills from "./components/Skills/Skills"

import './index.css'
import Contatos from "./components/Contatos/Contatos"
import Footer from "./components/Footer/Footer"

export const App = () => {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      const el = document.getElementById(state.scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.state]);

  return (
    <main>
      <Header/>
      <Inicio/>
      <Sobre/>
      <Projetos/>
      <Carreira/>
      <Skills/>
      <Contatos/>
      <Footer/>
    </main>
  )
}
