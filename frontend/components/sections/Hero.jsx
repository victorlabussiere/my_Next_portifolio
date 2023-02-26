import styles from '../../styles/stylesModules/styles.module.css'
import Image from 'next/image'

export default function Hero() {
    return (
        <>
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
                    <a href='/static/resume.pdf'
                        download
                        className='tertiaryButton'>

                        <i className='material-icons'>description</i>
                        <p className='pS'>Faça um download do meu currículo</p>
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

        </>
    )
}