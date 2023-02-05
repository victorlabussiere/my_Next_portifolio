import styles from '../../styles/hero/Hero.module.css'

export default function Hero() {
    return (
        <div className={styles.heroContainer} id='hero'>

            <header>
                <h1>Dev <span>Java</span><span>Script</span></h1>
                <h3 className='h3S'>Desenvolvo aplicações <span className='h3M' >Web</span> com foco na <span className='h3M'>Experiência de Usuário</span></h3>
            </header>

            <div className={styles.ctaBtns}>
                <div
                    tabIndex={1}
                    role='button'
                    className='primaryButton'>Trabalhe comigo agora!</div>

                <a className='tertiaryButton'>Faça um download do meu currículo</a>
            </div>

        </div>
    )
}