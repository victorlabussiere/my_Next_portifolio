import styles from '../../styles/contato/Contato.module.css'

export default function Contato() {
    return (
        <section className={styles.section} id='contato'>

            <div className={styles.container}>

                <header>
                    <h2>Contato</h2>
                </header>

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
                            <i class="devicon-linkedin-plain"></i>
                        </a>
                        <a href='mailto:victor.labussiere95@gmail.com' target="_blank">
                            <i class="devicon-google-plain"></i>
                        </a>
                        <a href="https://github.com/victorlabussiere" target="_blank">
                            <i class="devicon-github-plain"></i>
                        </a>

                    </div>

                </div>

            </div >
        </section >
    )
}