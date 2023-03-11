import styles from '../style/habilidades.module.css'

module.exports = class CloneFactory {
    constructor(obj, text) {
        this.modal = obj.parentNode.cloneNode(obj)
        this.text = text
    }

    _setModal(modal) {
        modal.classList = 'skillModal'

        const cloneText = modal.getElementsByTagName('p')[1]
        cloneText.innerHTML = this.text

        const cloneButton = modal.getElementsByTagName('div')[0]
        cloneButton.classList = `closeButton`
        cloneButton.innerHTML = 'Fechar'
        cloneButton.addEventListener('click', (e) => this._closeModal(e))

        return modal
    }

    getOpenModal() {
        const modal = this._setModal(this.modal)
        const modalState = window.localStorage.getItem('modalState')

        if (modalState === 'true') return
        else document.body.appendChild(modal)

        return this._setModalState(true)
    }

    _closeModal(event) {
        const button = event.target
        const modal = button.parentNode
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