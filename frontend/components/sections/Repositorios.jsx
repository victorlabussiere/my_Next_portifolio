import styles from '../../styles/stylesModules/styles.module.css'

export default function Repositorios() {
    return (
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

                    <div className={styles.cardsArea}>

                        <div className={styles.card}>
                            <span></span>
                            <p className='pL'>Card Name</p>
                        </div>

                        <div className={styles.card}>
                            <span></span>
                            <p className='pL'>Card Name</p>
                        </div>

                        <div className={styles.card}>
                            <span></span>
                            <p className='pL'>Card Name</p>
                        </div>

                        <div className={styles.card}>
                            <span></span>
                            <p className='pL'>Card Name</p>
                        </div>

                    </div>

                    <a className='tertiaryButton' target='_blank' href="https://github.com/victorlabussiere">
                        <i className="devicon-github-original"></i>
                        <p className='pM'>Acessar mais repositórios no github</p>
                    </a>


                </div>
            </div>
        </section>
    )
}