import { useEffect, useState } from 'react'
import styles from '../../styles/stylesModules/styles.module.css'
import Image from 'next/image'

export default function Repositorios() {

    const [repos, setRepos] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/victorlabussiere/repos')
            .then(res => res.json())
            .then(data => setRepos(data))
            .catch(err => console.error('Erro com a requisição à API do github', err))
    }, [])

    // draggable scroll info
    let isDragging = false;
    let startPosition = 0;
    let startScrollPosition = 0;

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

                    <div
                        className={styles.cardsArea}
                        id='cardsArea'
                    >

                        {repos.map(i => {
                            if (!i.description) return

                            return <div key={i.id} className={styles.card}>
                                <a href={i.html_url} target='_blank' className='pL'>{
                                    <p>
                                        {i.description}

                                    </p>
                                }</a>
                            </div>
                        })}

                    </div>

                    <a className='tertiaryButton' target='_blank' href="https://github.com/victorlabussiere">
                        <i className="devicon-github-original"></i>
                        <p className='pM'>Visitar GitHub</p>
                    </a>


                </div>
            </div>
        </section>
    )
}