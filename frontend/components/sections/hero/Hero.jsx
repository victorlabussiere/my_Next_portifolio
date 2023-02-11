import styles from '../../../styles/stylesModules/stylesModules.module.css'
import Image from 'next/image'

export default function Hero() {
    return (
        <>
            <section className={styles.heroContainer} id='hero'>

                <header>
                    <h1>Dev <span>Java</span><span>Script</span></h1>
                    <h3 className='h3S'>Desenvolvo aplicações <span className='h3M' >Web</span> com foco na <span className='h3M'>Experiência de Usuário</span></h3>
                </header>

                <div className={styles.ctaBtns}>
                    <h3 className='h3S primaryButton'>
                        <i className='material-icons'>phone</i>
                        Trabalhe comigo agora!
                    </h3>
                    <a href='/static/resume.pdf'
                        download
                        className='tertiaryButton'>

                        <i className='material-icons'>description</i>
                        <p className='pS'>Faça um download do meu currículo</p>
                    </a>
                </div>

            </section>

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
        </>
    )
}