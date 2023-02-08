import styles from '../../styles/footer/Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <h3 className="h3L">Desenvolvido por <a href="https://github.com/victorlabussiere" ta rget='_blank'>Victor Labussiere</a></h3>
            <div className={styles.iconsArea}>
                <a href="https://linkedin.com/in/victorlabussiere"
                    target='_blank'
                >
                    <i class="devicon-linkedin-plain"></i>
                </a>

                <a href="https://github.com/victorlabussiere"
                    target='_blank'
                >
                    <i class="devicon-github-plain"></i>
                </a>

                <a href="https://twitter.com/vitinhouw"
                    target='_blank'
                >
                    <i class="devicon-twitter-plain"></i>
                </a>
            </div>
        </footer>
    )
}