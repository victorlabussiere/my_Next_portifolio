import styles from './styles/repoList.module.css'

module.exports = class ModalFactory {
    constructor(obj) {
        this.title = obj.name
        this.description = obj.description
        this.url = obj.html_url
    }

    _setTitle() {
        const content = document.createElement('h3')
        content.innerHTML = this.title
        content.classList = 'h3S ' + `${styles.modalTitle}`
        return content
    }

    _setText() {
        const content = document.createElement('p')
        content.innerHTML = this.description
        content.classList = `${styles.modalText}`
        return content
    }

    _setButtons() {
        const content = document.createElement('div')
        content.classList = `${styles.actionModal}`

        const visit = document.createElement('a')
        visit.href = this.url
        visit.setAttribute('target', '_blank')
        visit.classList = `${styles.visitButton} `
        visit.innerHTML = 'Visitar repositório'

        const close = document.createElement('div')
        close.classList = `${styles.closeButton}`
        close.innerHTML = 'Fechar'
        close.addEventListener('click', (e) => this._closeModal(e))

        content.appendChild(visit)
        content.appendChild(close)

        return content
    }

    _setModal() {
        const content = document.createElement('div')
        const title = this._setTitle()
        const text = this._setText()
        const buttonsArea = this._setButtons()

        content.classList = `${styles.modal}`

        content.appendChild(title)
        content.appendChild(text)
        content.appendChild(buttonsArea)
        return content
    }

    _closeModal(e) {
        const modal = e.target.parentNode.parentNode
        modal.remove()
        this.setModalState(false)
        window.localStorage.removeItem('modalState')
        return void (0)
    }

    getOpenModal() {
        const modal = this._setModal()
        const modalState = window.localStorage.getItem('modalState')

        if (modalState === 'true') return

        document.body.appendChild(modal)
        return this.setModalState(true)
    }

    setModalState(state) {
        window.localStorage.setItem('modalState', state.toString())
        return void (0)
    }

}