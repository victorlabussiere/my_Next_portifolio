import Hero from "../components/sections/hero/Hero"
import Services from "../components/sections/Services"
import Habilidades from "../components/sections/Habilidades"
import Repositorios from "../components/sections/Repositorios"
import Contato from "../components/sections/Contato"
import Sobre from "../components/sections/Sobre"

export default function Home() {
  return (
    <main id='top'>
      <Hero />
      <Services />
      <Habilidades />
      <Repositorios />
      <Contato />
      <Sobre />
    </main>
  )
}

