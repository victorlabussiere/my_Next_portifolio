import Link from "next/link"

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
        <nav    >
            <h3>
                <a href='#top' onClick={(e) => scrollSuave(e)} >
                    Victor
                </a>
                {' '} {/* divisão de palavras */}
                <a href='#top' onClick={(e) => scrollSuave(e)} >
                    Labussiere
                </a>
            </h3>


            <ul>
                <li>
                    <Link href="#top" onClick={(e) => scrollSuave(e)}>voltar ao topo</Link>
                </li>
                <li>
                    <Link href="#servicos" onClick={(e) => scrollSuave(e)}>serviços</Link>
                </li>
                <li>
                    <Link href="#habilidades" onClick={(e) => scrollSuave(e)} >habilidades</Link>
                </li>
                <li>
                    <Link href="#repositorios" onClick={(e) => scrollSuave(e)}>repositorios</Link>
                </li>
                <li>
                    <Link href="#contato" onClick={(e) => scrollSuave(e)}>contato</Link>
                </li>
                <li>
                    <Link href="#sobre" onClick={(e) => scrollSuave(e)}>sobre mim</Link>
                </li>
            </ul>
        </nav >
    )
}