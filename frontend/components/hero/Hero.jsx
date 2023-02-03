import styles from '../../styles/hero/Hero.module.css'

export default function Hero() {
    return (
        <section className={styles.heroContainer}>

            <div className={styles.heroContent}>

                <header>
                    <h1>Dev <span>Java</span><span>Script</span></h1>
                    <h3>Desenvolvo aplicações <span>Web</span> com foco na <span>Experiência de Usuário</span></h3>
                </header>

                <div className={styles.ctaBtns}>
                    <button className='primaryButton'>Trabalhe comigo agora!</button>
                    <a className='tertiaryButton'>Faça um download do meu currículo</a>
                </div>

            </div>

        </section>
    )
}