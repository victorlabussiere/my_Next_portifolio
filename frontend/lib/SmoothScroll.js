export default function SmoothScroll(e) {
    e.preventDefault()
    if (e.target.tagName === 'A' && e.target.hash) {

        let targetPosition = document.querySelector(e.target.hash).offsetTop
        if (targetPosition <= 190) targetPosition = 0

        window.scrollTo({
            behavior: 'smooth',
        }, targetPosition)

        return void (0)
    }
}