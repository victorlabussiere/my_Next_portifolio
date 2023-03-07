import styles from '../styles/stylesModules/styles.module.css'
import Image from "next/image"

import { useState, useEffect } from "react"
import CardList from '../components/ui/Habilidades/CardsList'
import RepoList from '../components/ui/Repositorios/RepoList'

export default function Home() {

  // Download service API
  async function handleDownload() {
    const link = document.createElement('a')
    link.href = process.env.DOWNLOAD_API
    link.setAttribute('download', 'curriculo-victor.pdf')
    link.click()

    return void (0)
  }

  // Starting Frontend Services
  const [repos, setRepos] = useState([])
  const [picture, setPicture] = useState()
  useEffect(() => {

    // github api avatar request
    fetch('https://api.github.com/users/victorlabussiere')
      .then(res => res.json())
      .then(dt => setPicture(dt.avatar_url))
      .catch(err => 'Erro na requisição de avatar do Github.' + err)

    // github api repos request 
    fetch(process.env.BASE_URL + 'users/' + process.env.BASE_USER + '/repos')
      .then(res => res.json())
      .then(data => setRepos(data))
      .catch(err => console.error('Não foi possível consultar os repositórios através de uma requisição À API do github', err.message))

    // Refresh modalState on Loading
    window.localStorage.removeItem('modalState')
    return void (0)

  }, [])

  return (
    <main id='top'>

      {/* Hero Section */}
      <section className={styles.heroContainer} >

        <header>
          <h1>Dev <strong>Java</strong><strong>Script</strong></h1>

          <h3 className='h3S'>
            Desenvolvo aplicações <strong className='h3M'>Web</strong> com foco na
            <br />
            <strong>Experiência de Usuário</strong>
          </h3>
        </header>

        <div className={styles.ctaBtns}>
          <h3 className='h3S primaryButton'>
            <i className='material-icons'>phone</i>
            Trabalhe comigo agora!
          </h3>
          <a
            className='tertiaryButton'
            role='button'
            onClick={handleDownload}
          >
            <i className='material-icons'>description</i>
            <p className='pS'
            >Faça um download do meu currículo</p>
          </a>
        </div>

        <div className={styles.ilContainer}>
          <ul className={styles.features}>
            <li className='h3S' >Javascript</li>
            <li className='h3S'>React</li>
            <li className='h3S'>Next JS</li>
            <li className='h3S'>Typescript</li>
            <li className='h3S'>Node JS</li>
            <li className='h3S'>GIT Bash & Github</li>
          </ul>
          <Image src='/images/hero-i.png' width={852} height={557} alt='Illustração de um IDE' className={styles.picture} />
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services} id='services'>

        <h2>Serviços</h2>

        <hgroup>
          <h3>Encontre o dev frontend que você procura!</h3>
          <p className="pS">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum odit consectetur pariatur quibusdam explicabo similique modi inventore dolorem, non harum aliquid? Fugit perspiciatis fugiat officia repudiandae quod dolorem, corporis et!
          </p>
        </hgroup>

        <div className={styles.services_container}>

          <aside>
            <h3 className="h3M">Web Designer</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta consectetur ad dolorem atque tenetur rerum velit illum tempore dolor rem delectus, quo quam impedit exercitationem ullam et maiores sequi!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta consectetur ad dolorem atque tenetur rerum velit illum tempore dolor rem delectus, quo quam impedit exercitationem ullam et maiores sequi!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta consectetur ad dolorem atque tenetur rerum velit illum tempore dolor rem delectus, quo quam impedit exercitationem ullam et maiores sequi!</p>
          </aside>

          <hr />

          <aside>

            <h3 className="h3M">Frontend Dev</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta consectetur ad dolorem atque tenetur rerum velit illum tempore dolor rem delectus, quo quam impedit exercitationem ullam et maiores sequi!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta consectetur ad dolorem atque tenetur rerum velit illum tempore dolor rem delectus, quo quam impedit exercitationem ullam et maiores sequi!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta consectetur ad dolorem atque tenetur rerum velit illum tempore dolor rem delectus, quo quam impedit exercitationem ullam et maiores sequi!</p>
          </aside>
        </div>

      </section>

      {/* Habilidades Section */}
      <section className={styles.habilidades} id='habilidades'>
        <h2>Habilidades</h2>

        <hgroup>
          <h3 className='h3L'>
            Saiba como eu posso ser útil,
          </h3>
          <p className='pS'>Ao longo da minha jornada, acumulei conhecimento e domínio nas tecnologias que me foram apresentadas. E além da área de desenvolvimento web, já atuei como operador de ferramentas voltadas para o design gráfico. Conheça meu stack e veja como posso colaborar:</p>
        </hgroup>

        <div className={styles.habilidades_container}>
          <CardList />
        </div>

      </section>

      {/* Repositorios Section */}
      <section className={styles.repositorios} id='repositorios' >

        <h2>Repositórios</h2>

        <div className={styles.repositorios_container} >

          <div className={styles.cardsContainer}>

            <header className={styles.cardsContainer_title}>

              <h3 className='h3L'>Desenvolvo projetos independentes a fim de estudos e portifólio</h3>

              <p className='pS'>Esses são alguns dos projetos no qual trabalhei com o fim de lapidar minhas habildiades e praticar princípios importantes na programação como POO e Programação Funcional. </p>

              <p className='pS'>Além de praticas backend, busco sempre aplicar fundamentos UX a fim de promover usabilidade simples e intuitíva porquê, por mais que a ideia de um sistema possa ser simples, o uso correto depende do bom desing.</p>

              <p className='pS'>Acesse meu Github e veja mais sobre o que venho trabalhando.</p>

            </header>

            <h3 className='h3S'>Projetos destacados:</h3>

            <RepoList repoList={repos} />

            <a className='tertiaryButton' target='_blank' href="https://github.com/victorlabussiere">
              <i className="devicon-github-original"></i>
              <p className='pM'>Visitar GitHub</p>
            </a>


          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section className={styles.contato} id='contato'>

        <h2>Contato</h2>
        <div className={styles.contato_container}>

          <hgroup>
            <h3 className='h3L'>Utilize esse espaço para iniciar um primeiro contato</h3>
            <p className='pS'> Preencha o formulário com suas informações e envie uma mensagem. A sua mensagem será enviada ao meu e-mail.</p>
          </hgroup>

          <form>
            <h3 className='h3M'> Iniciar uma conversa</h3>

            <label htmlFor="nome"><p className='pL'>Nome</p>
              <input type="text" placeholder='Digite seu nome aqui...' /></label>

            <label htmlFor="email"><p className='pL'>E-mail</p>
              <input type="text" placeholder='Digite seu email aqui...' /></label>

            <label htmlFor="mensagem"> <p className='pL'>Mensagem</p>
              <textarea type="text" placeholder='Digite sua mensagem aqui...' /></label>

            <div role='button' className='h3S primaryButton'>
              <i className='material-icons'>mail</i>
              Enviar mensagem
            </div>

          </form>

          <div className={styles.instrucoesArea}>
            <div className={styles.ins}>
              <h3 className='pL'>Tem interesse em trabalhar comigo?</h3>
              <p className='pS'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus</p>
            </div>

            <div className={styles.ins}>
              <h3 className='pL'>Qual é o seu feedback?</h3>
              <p className='pS'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus</p>
            </div>
            <div className={styles.ins}>
              <h3 className='pL'>Saiba mais sobre esse projeto!</h3>
              <p className='pS'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus</p>
            </div>

            <div className={styles.btnArea}>
              <p className='pS'>Também poderá me encontrar aqui:</p>

              <a href="https://linkedin.com/in/victorlabussiere" target="_blank">
                <i className="devicon-linkedin-plain"></i>
              </a>
              <a href='mailto:victor.labussiere95@gmail.com' target="_blank">
                <i className="devicon-google-plain"></i>
              </a>
              <a href="https://github.com/victorlabussiere" target="_blank">
                <i className="devicon-github-plain"></i>
              </a>

            </div>

          </div>

        </div >
      </section >

      {/* Sobre Section */}
      <section className={styles.sobre} id='sobre'>

        <h2>Sobre mim</h2>

        <div className={styles.sobre_container}>

          <div className={styles.textsArea}>
            <h3 className="h3L">Muito prazer,</h3>

            <div className={styles.texts}>
              <p className="pS">
                Sou um desenvolvedor Frontend, amante da Ciência da Computação, com uma longa estrada para trilhar e muita habilidade na bagagem. Amo o que faço, por isso nunca vai faltar empenho e dedicação.
              </p>
              <p className="pS">
                Atuo como freelancer em projetos que necessitem de um desenvolvedor Javascript, oferecendo profundo conhecimento do framework Next JS, de React, e de conceitos avançados de UX Design.
              </p>
              <p className="pS">
                Desenvolvi essa plataforma para abrir caminho para novas oportunidades de trabalho, a fim de apresentar uma solução para aqueles que procuram aptidão, disciplina, empenho e vontade constante de evoluir.
              </p>
            </div>
            <img loading='lazy' decoding='async' src={picture} className={styles.profilePic} alt="Meu avatar no github" />
          </div>

          <div className={styles.btnArea}>
            <a href="https://linkedin.com/in/victorlabussiere" target='_blank' className='primaryButton h3S'>
              <i className="devicon-linkedin-plain"></i>
              Linkedin
            </a>

            <a
              role="button"
              className='primaryButton h3S'
              onClick={handleDownload}
            >
              <i className='material-icons'>cloud_download</i>
              Currículo
            </a>
          </div>

        </div>
      </section>

    </main >
  )
}

