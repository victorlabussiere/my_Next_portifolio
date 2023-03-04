import styles from '../../styles/stylesModules/styles.module.css'
import { useEffect, useState } from 'react'
import DownloadResume from '../../Services/DownloadResume.js'

export default function Sobre() {

    const [picture, setPicture] = useState()

    useEffect(() => {
        fetch('https://api.github.com/users/victorlabussiere')
            .then(res => res.json())
            .then(dt => dt.avatar_url)
            .then(res => setPicture(prev => prev = res))
            .catch(err => 'Erro na requisição de avatar do Github.' + err)
    }, [])

    return (
        <section className={styles.sobre} id='sobre'>

            <h2>Sobre mim</h2>

            <div className={styles.sobre_container}>

                <div className={styles.textsArea}>
                    <h3 className="h3L">Muito prazer,</h3>

                    <div className={styles.texts}>
                        <p className="pS">
                            Eu me chamo Victor Labussiere, estudo Análise e Desenvolvimento de Sistemas  e sou um Dev. em busca de uma oportunidade. Tenho paixão por tecnologia e estou sempre atento nas novas tendências do mercado, tanto do design quanto da programação.
                        </p>
                        <p className="pS">
                            Desenvolvi esse projeto pensando em oferecer soluções para alguns obstáculos que venho enfrentando ao tentar ingressar no mercado como, por exemplo, mostrar que a falta de experiência não quer dizer, necessáriamente, dispensabilidade.
                        </p>
                        <p className="pS">
                            O foco desse projeto é mostrar o meu potêncial e o quanto eu posso agregar em um time de pessoas desenvolvedoras, tanto com meu stack de hard skills quanto com minhas habilidades em integrar um ambiente social.
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
                        onClick={DownloadResume}
                    >
                        <i className='material-icons'>cloud_download</i>
                        Currículo
                    </a>
                </div>

            </div>
        </section>
    )
}