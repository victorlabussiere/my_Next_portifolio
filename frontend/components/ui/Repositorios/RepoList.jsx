import styles from './styles/repoList.module.css'
import ModalFactory from './ReposModalFactory'

export default function RepoList({ repoList }) {

    function openModal(obj) {
        let modal = new ModalFactory(obj)
        return modal.getOpenModal()
    }

    return (

        <ul className={styles.cardsArea} id='cardsArea'>
            {
                repoList.map(i => {
                    if (!i.description) return
                    return (
                        <li key={i.id} className={styles.card}>
                            <p className={styles.cardTitle}> {i.description} </p>

                            <div
                                className={styles.cardButton}
                                role='button'
                                onClick={() => openModal(i)}>
                                <i className={`material-icons ${styles.iconButton}`}>
                                    rocket_launch
                                </i>
                            </div>
                        </li>
                    )
                })
            }

        </ul>

    )
}