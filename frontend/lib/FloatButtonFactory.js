import SmoothScroll from "./SmoothScroll"

export default class FloatButtonFactory {
    constructor() {
        this.count = 'fbCount'
        this.smootFunction = (e) => SmoothScroll(e)

    }

    setStateButton(value) {
        window.localStorage.setItem(this.count, value)
        return void (0)
    }

    setButton() {
        const link = document.createElement('a')
        link.href = '#top'
        link.classList = 'floatButton material-icons'
        link.innerHTML = 'north<br/>home'

        link.setAttribute('id', 'floatButton')
        link.addEventListener('click', (e) => {
            this.smootFunction(e)
            link.remove()
            return this.setStateButton(0)
        })

        return link
    }

    getFloatButton() {
        if (window.scrollY <= 600) return

        const contador = window.localStorage.fbCount
        if (contador === 1 || contador === '1') return;

        const btn = document.getElementById('floatButton')
        if (btn) return

        const link = this.setButton()
        setTimeout(() => {
            document.body.append(link)
        }, 100);

        return this.setStateButton(1)
    }

    hideButton() {
        const link = document.getElementById('floatButton')
        const contador = window.localStorage.fbCount
        if (!link) return
        if (contador === 0 || contador === '0') return

        setTimeout(() => {
            link.remove()
            window.localStorage.removeItem(this.count)
        }, 2500);

        return void (0)
    }
}