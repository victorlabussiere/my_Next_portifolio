import styles from '../../styles/hero/Illustration.module.css'

import Image from 'next/image'

export default function IllustrationHero() {
    return (
        <div className={styles.ilContainer}>
            <ul className={styles.features}>
                <li className='h3S' >Javascript</li>
                <li className='h3S'>React</li>
                <li className='h3S'>Next JS</li>
                <li className='h3S'>Typescript</li>
                <li className='h3S'>Node JS</li>
                <li className='h3S'>GIT Bash & Github</li>
            </ul>
            <Image src='/images/hero-i.png' width={852} height={557} alt='Illustração de um IDE' className={styles.picture} />
        </div>
    )
}