import styles from './styles/repoList.module.css'

module.exports = class ModalFactory {
    constructor(obj) {
        this.title = obj.name
        this.description = obj.description
        this.url = obj.html_url
    }

    _setTexts() {
        const title = document.createElement('h3')
        title.innerHTML = this.title
        title.classList = 'h3S ' + `${styles.modalTitle}`

        const text = document.createElement('p')
        text.innerHTML = this.description
        text.classList = `${styles.modalText}`

        return [title, text]
    }

    _setButtons() {
        const content = document.createElement('div')
        content.classList = `${styles.actionModal}`

        const visit = document.createElement('a')
        visit.setAttribute('target', '_blank')
        visit.className = `${styles.visitButton}`
        visit.innerHTML = 'Visitar repositório'
        visit.href = this.url

        const close = document.createElement('div')
        close.setAttribute('role', 'button')
        close.className = `${styles.closeButton}`
        close.innerHTML = 'Fechar'
        close.addEventListener('click', (e) => this._closeModal(e))

        content.append(close, visit)
        return content
    }

    _setModal(texts, buttonsArea) {
        const content = document.createElement('div')
        content.classList = `${styles.modal}`

        content.append(...texts, buttonsArea)
        return content
    }

    getOpenModal() {
        const texts = this._setTexts()
        const buttons = this._setButtons()
        const modal = this._setModal(texts, buttons)

        const modalState = window.localStorage.getItem('modalState')
        if (modalState === 'true') return
        else document.body.appendChild(modal)

        return this._setModalState(true)
    }

    _closeModal(e) {
        const modal = e.target.parentNode.parentNode
        modal.remove()
        this._setModalState(false)
        window.localStorage.removeItem('modalState')
        return void (0)
    }

    _setModalState(state) {
        window.localStorage.setItem('modalState', state.toString())
        return void (0)
    }

}