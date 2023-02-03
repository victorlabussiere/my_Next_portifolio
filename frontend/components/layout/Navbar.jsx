import styles from '../../styles/navbar/Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navContainer}>
            <header className={styles.navHeader}>
                <h3>Victor <span>Labussiere</span></h3>
            </header>

            <ul className={styles.navUl}>
                <li className='tertiaryButton'>voltar ao topo</li>
                <li className='tertiaryButton'>serviços</li>
                <li className='tertiaryButton'>habilidades</li>
                <li className='tertiaryButton'>repositórios</li>
                <li className='tertiaryButton'>contato</li>
                <li className='tertiaryButton'>sobre mim</li>
            </ul>
        </nav>
    )
}