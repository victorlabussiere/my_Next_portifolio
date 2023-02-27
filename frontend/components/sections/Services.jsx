import styles from '../../styles/stylesModules/styles.module.css'

export default function Services() {
    return (
        <section className={styles.services} id='services'>

            <h2>Serviços</h2>

            <hgroup>
                <h3>Encontre o dev frontend que você procura!</h3>
                <p className="pS">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum odit consectetur pariatur quibusdam explicabo similique modi inventore dolorem, non harum aliquid? Fugit perspiciatis fugiat officia repudiandae quod dolorem, corporis et!
                </p>
            </hgroup>

            <div className={styles.services_container}>

                <aside>
                    <h3 className="h3M">Web Designer</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta consectetur ad dolorem atque tenetur rerum velit illum tempore dolor rem delectus, quo quam impedit exercitationem ullam et maiores sequi!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta consectetur ad dolorem atque tenetur rerum velit illum tempore dolor rem delectus, quo quam impedit exercitationem ullam et maiores sequi!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta consectetur ad dolorem atque tenetur rerum velit illum tempore dolor rem delectus, quo quam impedit exercitationem ullam et maiores sequi!</p>
                </aside>

                <hr />

                <aside>

                    <h3 className="h3M">Frontend Dev</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta consectetur ad dolorem atque tenetur rerum velit illum tempore dolor rem delectus, quo quam impedit exercitationem ullam et maiores sequi!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta consectetur ad dolorem atque tenetur rerum velit illum tempore dolor rem delectus, quo quam impedit exercitationem ullam et maiores sequi!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta consectetur ad dolorem atque tenetur rerum velit illum tempore dolor rem delectus, quo quam impedit exercitationem ullam et maiores sequi!</p>
                </aside>
            </div>

        </section>
    )
}