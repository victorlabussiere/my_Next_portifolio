import SmoothScroll from "../../lib/SmoothScroll"

import FloatButtonFactory from "../../lib/FloatButtonFactory"

export default function Navbar() {
    const floatButton = new FloatButtonFactory()

    function showButton() { floatButton.getFloatButton() }
    async function hideButton() { floatButton.hideButton() }

    return (
        <>
            <nav
                onMouseOver={showButton}
                onMouseLeave={hideButton}
            >

                <h3>
                    <a href='#top' onClick={(e) => SmoothScroll(e)} >
                        Victor
                    </a>
                    &nbsp;
                    <a href='#top' onClick={(e) => SmoothScroll(e)} >
                        Labussiere
                    </a>
                </h3>

                <ul>
                    <li>
                        <a onClick={(e) => SmoothScroll(e)} href="/#services">serviços</a>
                    </li>
                    <li>
                        <a onClick={(e) => SmoothScroll(e)} href="/#habilidades" >habilidades</a>
                    </li>
                    <li>
                        <a onClick={(e) => SmoothScroll(e)} href="/#repositorios">repositorios</a>
                    </li>
                    <li>
                        <a onClick={(e) => SmoothScroll(e)} href="/#contato">contato</a>
                    </li>
                    <li>
                        <a onClick={(e) => SmoothScroll(e)} href="/#sobre">sobre mim</a>
                    </li>
                </ul>
            </nav >
        </>
    )
}