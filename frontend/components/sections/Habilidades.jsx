import styles from '../../styles/stylesModules/styles.module.css'
import Image from 'next/image'

export default function Habilidades() {
    return (
        <section className={styles.habilidades} id='habilidades'>
            <h2>Habilidades</h2>

            <div className={styles.habilidades_container}>
                <hgroup>
                    <h3 className='h3L'>
                        As habilidades que eu ofereço para colaborar com seu ambiente
                    </h3>
                    <p className='pS'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nemo libero vitae dolor laborum itaque ducimus quod doloremque, nam, error, at necessitatibus amet quia culpa recusandae numquam facere modi delectus?</p>
                </hgroup>

                <div className={styles.cardsArea} >

                    <div className={styles.card}>
                        <header>
                            <Image src='/logos/jsLogo.png' width={56} height={56} className={styles.logoIcon} alt='Javascript Logo' />
                            <Image src='/logos/tsLogo.png' width={56} height={56} className={styles.logoIcon} alt='Typescript Logo' />
                        </header>
                        <p className='pM'>Javascript & Typescript</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique praesentium nulla, consequatur tenetur nobis autem? Totam aspernatur, accusamus nemo a, magnam tenetur debitis vel nisi deserunt necessitatibus at odit expedita.</p>

                    </div>

                    <div className={styles.card}>
                        <header>
                            <Image src='/logos/reactLogo.png' width={56} height={56} className={styles.logoIcon} alt='React Logo' />
                            <Image src='/logos/nextLogo.png' width={56} height={56} className={styles.logoIcon} alt='Next JS Logo' />
                        </header>
                        <p className='pM'>React & Next JS</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique praesentium nulla, consequatur tenetur nobis autem? Totam aspernatur, accusamus nemo a, magnam tenetur debitis vel nisi deserunt necessitatibus at odit expedita.</p>

                    </div>

                    <div className={styles.card}>
                        <header>
                            <Image src='/logos/nodeLogo.png' width={56} height={56} className={styles.logoIcon} alt='Node JS Logo' />
                        </header>
                        <p className='pM'>Node JS</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique praesentium nulla, consequatur tenetur nobis autem? Totam aspernatur, accusamus nemo a, magnam tenetur debitis vel nisi deserunt necessitatibus at odit expedita.</p>

                    </div>

                    <div className={styles.card}>
                        <header>
                            <Image src='/logos/htmlLogo.png' width={56} height={56} className={styles.logoIcon} alt='Html5 Logo' />
                            <Image src='/logos/cssLogo.png' width={56} height={56} className={styles.logoIcon} alt='CSS3 Logo' />
                            <Image src='/logos/sassLogo.png' width={56} height={56} className={styles.logoIcon} alt='Sass Logo' />
                        </header>
                        <p className='pM'>HTML5, CSS3 & SASS</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique praesentium nulla, consequatur tenetur nobis autem? Totam aspernatur, accusamus nemo a, magnam tenetur debitis vel nisi deserunt necessitatibus at odit expedita.</p>

                    </div>

                    <div className={styles.card}>
                        <header>
                            <Image src='/logos/gitbashLogo.png' width={56} height={56} className={styles.logoIcon} alt='Git Logo' />
                            <Image src='/logos/githubLogo.png' width={56} height={56} className={styles.logoIcon} alt='GitHub Logo' />
                        </header>
                        <p className='pM'>GIT Bash & GitHub</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique praesentium nulla, consequatur tenetur nobis autem? Totam aspernatur, accusamus nemo a, magnam tenetur debitis vel nisi deserunt necessitatibus at odit expedita.</p>

                    </div>

                    <div className={styles.card}>
                        <header>
                            <Image src='/logos/figmaLogo.png' width={56} height={56} className={styles.logoIcon} alt='Figma Logo' />
                            <Image src='/logos/adobexdLogo.png' width={56} height={56} className={styles.logoIcon} alt='Adobe XD Logo' />
                            <Image src='/logos/corelLogo.png' width={56} height={56} className={styles.logoIcon} alt='CorelDraw Logo' />
                            <Image src='/logos/illustratorLogo.png' width={56} height={56} className={styles.logoIcon} alt='Adobe Illustrator Logo' />

                        </header>
                        <p className='pM'>Web Design Tools </p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique praesentium nulla, consequatur tenetur nobis autem? Totam aspernatur, accusamus nemo a, magnam tenetur debitis vel nisi deserunt necessitatibus at odit expedita.</p>

                    </div>

                </div>
            </div>

        </section>
    )
}