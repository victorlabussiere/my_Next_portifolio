import styles from '../../styles/navbar/Navbar.module.css'

export default function Navbar() {

    function scrollSuave(e) {
        e.preventDefault()
        if (e.target.tagName === 'A' && e.target.hash != '') {

            let targetPosition = document.querySelector(e.target.hash).offsetTop
            if (targetPosition <= 190) targetPosition = 0

            return scrollTo({
                top: targetPosition,
                left: 0,
                behavior: 'smooth'
            })
        }
    }

    return (
        <nav className={styles.nav}>
            <h3 className={styles.navHeader}>
                <a href='#top' onClick={(e) => scrollSuave(e)} >
                    Victor
                </a>
                {' '} {/* divisão de palavras */}
                <a href='#top' onClick={(e) => scrollSuave(e)} >
                    Labussiere
                </a>
            </h3>


            <ul className={styles.navUl}>
                <li className={styles.li}>
                    <a href="#top" onClick={(e) => scrollSuave(e)}>voltar ao topo</a>
                </li>
                <li className={styles.li}>
                    <a href="#servicos" onClick={(e) => scrollSuave(e)}>serviços</a>
                </li>
                <li className={styles.li}>
                    <a href="#habilidades" onClick={(e) => scrollSuave(e)} >habilidades</a>
                </li>
                <li className={styles.li}>
                    <a href="#repositorios" onClick={(e) => scrollSuave(e)} s>repositorios</a>
                </li>
                <li className={styles.li}>
                    <a href="#contato" onClick={(e) => scrollSuave(e)}>contato</a>
                </li>
                <li className={styles.li}>
                    <a href="#sobre" onClick={(e) => scrollSuave(e)}>sobre mim</a>
                </li>
            </ul>
        </nav >
    )
}