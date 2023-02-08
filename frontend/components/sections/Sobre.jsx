import styles from '../../styles/Sobre/Sobre.module.css'
import Image from 'next/image'

export default function Sobre() {
    return (
        <section className={styles.section} id='sobre'>

            <h2>Sobre mim</h2>

            <div className={styles.container}>

                <div className={styles.textsArea}>
                    <h3 className="h3L">Muito prazer,</h3>

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

                <div className={styles.pictureArea}>
                    <Image className={styles.profilePic} width={240} height={240} src='/images/profile.jpeg' alt='Foto de Victor Labussiere' />
                </div>

                <div className={styles.btnArea}>
                    <a href="https://linkedin.com/in/victorlabussiere" target='_blank' className='primaryButton h3S'>
                        <i class="devicon-linkedin-plain"></i>
                        Linkedin
                    </a>

                    <a role="button" className='primaryButton h3S'>
                        <i className='material-icons'>cloud_download</i>
                        Currículo</a>
                </div>

            </div>
        </section>
    )
}