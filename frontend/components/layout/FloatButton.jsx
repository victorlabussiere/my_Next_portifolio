import SmoothScroll from "../../lib/SmoothScroll"

export default function FloatButton() {

    return (
        <a onClick={(e) => SmoothScroll} href='#top' className="material-icons floatButton">
            north <br /> home
        </a>
    )
}