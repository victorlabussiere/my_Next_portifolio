import styles from './style/card.module.css'
import Image from 'next/image'

export default function Card({ arrObjs, cardTitle, cardText }) {

    function openModal(e) {

        const card = e.target
        const clone = modalFactory(card)

        let modalState = window.localStorage.getItem('modalState')
        if (modalState === 'true') return

        document.body.appendChild(clone)
        return setModalState('true')

    }

    function modalFactory(node) {

        const parent = node.parentNode
        const clone = parent.cloneNode(node)

        clone.classList = `${styles.openModal} ${styles.skillCard}`

        const cloneButton = clone.getElementsByTagName('div')[0]
        cloneButton.classList = `${styles.closeButton}`
        const cloneText = clone.getElementsByTagName('p')[1]

        cloneButton.innerHTML = 'Fechar'
        cloneText.innerHTML = cardText
        cloneButton.addEventListener('click', (e) => closeModal(e))

        return clone
    }

    function setModalState(state) {
        window.localStorage.setItem('modalState', state.toString())
        return void (0)
    }

    function closeModal(e) {

        const button = e.target
        const modal = button.parentNode
        modal.remove()

        setModalState('false')
        window.localStorage.removeItem('modalState')

        return void (0)
    }

    let text = cardText.toString().slice(0, 150) + '...'
    return (
        <div className={styles.skillCard}>

            <hgroup className={styles.cardHeader}>
                {arrObjs.map(obj => <Image
                    src={obj.src}
                    width={obj.width}
                    height={obj.height}
                    alt={obj.alt}
                    key={obj.name}
                    className={styles.logoIcon}
                />)
                }
            </hgroup>

            <p className={[`pL ${styles.cardTitle}`]}>{cardTitle}</p>
            <p className={[`pS ${styles.textContent}`]}>{text.toString()}</p>
            <div
                role='button'
                className={[`${styles.readMore} pL`]}
                onClick={openModal}>Saiba mais...</div>
        </div>
    )
}