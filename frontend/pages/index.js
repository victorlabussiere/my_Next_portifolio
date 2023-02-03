import Hero from "../components/hero/Hero"
import IllustrationHero from "../components/hero/IllustrationHero"
import Services from "../components/sections/Services"
import Habilidades from "../components/sections/Habilidades"

export default function Home() {
  return (
    <main>
      <Hero />
      <IllustrationHero />
      <Services />
      <Habilidades />
    </main>
  )
}

