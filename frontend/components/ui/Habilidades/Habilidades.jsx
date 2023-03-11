
import styles from './style/habilidades.module.css'
import Card from "./Card/Card"
import Logos from './Card/cardData'

export default function Habilidades() {
    // Getting Logos Images
    const cardsData = new Logos
    const [js, ts, react, next, node, html, css, sass, gitBash, gitHub, figma, adobeXd, corel, illustrato] = [
        'javascript', 'typescript', 'react', 'next', 'node', 'html', 'css', 'sass', 'gitbash', 'github', 'figma', 'adobeXd', 'corel', 'illustrator'
    ].map(i => cardsData.getData(i))

    let textJSTS = 'Como você já deve saber, o JavaScript é a linguagem de programação mais popular no mundo do desenvolvimento web. Ele é usado para criar interações dinâmicas com o usuário, criar aplicativos web e até mesmo para desenvolver jogos. O TypeScript, por outro lado, é uma linguagem de programação de código aberto que é construída sobre o JavaScript, fornecendo mais recursos, como tipagem estática, para aumentar a segurança e a eficiência do código.'
    let textReactNext = `O React e o Next.js são tecnologias essenciais para o desenvolvimento de aplicativos modernos na web. Com a popularidade crescente do React, é importante contar com um desenvolvedor que entenda a importância de desenvolver com essas ferramentas. Com React, você pode construir interfaces de usuário interativas e escaláveis com componentes reutilizáveis. Já o Next.js é uma excelente opção para criar aplicativos de página única (SPAs) e aplicativos universais que podem ser executados tanto no lado do servidor quanto no lado do cliente. Além disso, o Next.js oferece recursos importantes, como renderização do lado do servidor, pré-renderização estática e suporte para otimização de SEO. Se você quer garantir a construção de um aplicativo moderno, escalável e eficiente, o React e o Next.js são tecnologias cruciais que devem ser levadas em consideração. Com a experiência em React e Next.js, você terá um desenvolvedor preparado para construir um aplicativo de alta qualidade e escalável que será um diferencial para o seu negócio.`
    let jsText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum odit consectetur pariatur quibusdam explicabo similique modi inventore dolorem, non harum aliquid? Fugit perspiciatis fugiat officia repudiandae quod dolorem, corporis et!"

    return (
        <div className={styles.habilidades_container}>
            <div className={styles.skillCardsArea}>
                <Card data={[js, ts]} cardText={textJSTS} cardTitle='Javscript & Typescript' />
                <Card data={[react, next]} cardText={textReactNext} cardTitle='React JS & Next' />
                <Card data={[node]} cardText={jsText} cardTitle='Node JS' />
                <Card data={[html, css, sass]} cardText={jsText} cardTitle='HTML, CSS & SASS' />
                <Card data={[gitBash, gitHub]} cardText={jsText} cardTitle='GIT & Github' />
                <Card data={[figma, adobeXd, corel, illustrato]} cardText={jsText} cardTitle='Web Design Tools' />
            </div>
        </div>
    )
}