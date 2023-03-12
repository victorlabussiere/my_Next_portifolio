import styles from '../style/habilidades.module.css'
import Image from 'next/image'

import ModalFactory from '../CardModalFactory'

export default function Card({ data, cardTitle, cardText }) {

    function openModal(e) {
        const modal = new ModalFactory(e.target, cardText)
        return modal.getOpenModal()
    }

    let slicedText = cardText.toString().slice(0, 110) + '...'
    return (
        <div className={styles.skillCard}>

            <hgroup className={styles.cardHeader}>

                {data.map(obj =>
                    <Image
                        src={obj.src}
                        width={obj.width}
                        height={obj.height}
                        alt={obj.alt}
                        key={obj.name}
                        className={styles.logoIcon}
                    />
                )}
            </hgroup>

            <p className={[`pL ${styles.cardTitle}`]}>{cardTitle}</p>
            <p className={[`pS ${styles.textContent}`]}>{slicedText}</p>
            <div
                role='button'
                className={[`${styles.readMore} pL`]}
                onClick={(e) => openModal(e, cardText)}>Saiba mais...</div>
        </div>
    )
}