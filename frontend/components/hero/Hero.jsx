import styles from '../../styles/hero/Hero.module.css'
import Link from 'next/link'

export default function Hero() {
    return (
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
    )
}