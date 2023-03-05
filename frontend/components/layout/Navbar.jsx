export default function Navbar() {

    function scrollSuave(e) {
        e.preventDefault()
        if (e.target.tagName === 'A' && e.target.hash) {

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
        <nav    >
            <h3>
                <a href='#top' onClick={(e) => scrollSuave(e)} >
                    Victor
                </a>
                &nbsp;
                <a href='#top' onClick={(e) => scrollSuave(e)} >
                    Labussiere
                </a>
            </h3>

            <ul>
                <li>
                    <a href="#services" onClick={(e) => scrollSuave(e)}>serviços</a>
                </li>
                <li>
                    <a href="#habilidades" onClick={(e) => scrollSuave(e)} >habilidades</a>
                </li>
                <li>
                    <a href="#repositorios" onClick={(e) => scrollSuave(e)}>repositorios</a>
                </li>
                <li>
                    <a href="#contato" onClick={(e) => scrollSuave(e)}>contato</a>
                </li>
                <li>
                    <a href="#sobre" onClick={(e) => scrollSuave(e)}>sobre mim</a>
                </li>
            </ul>
        </nav >
    )
}