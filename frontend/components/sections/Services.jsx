import styles from '../../styles/sServices/Services.module.css'

export default function Services() {
    return (
        <section className={styles.servicesContainer}>

            <header>
                <h2>Serviços</h2>
                <h3>Encontre o dev frontend que você procura!</h3>
                <p className="pM">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum odit consectetur pariatur quibusdam explicabo similique modi inventore dolorem, non harum aliquid? Fugit perspiciatis fugiat officia repudiandae quod dolorem, corporis et!
                </p>
            </header>

            <div className={styles.servicesContent}>

                <div className={styles.columnS}>
                    <h3 className="h3M">Web Designer</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta consectetur ad dolorem atque tenetur rerum velit illum tempore dolor rem delectus, quo quam impedit exercitationem ullam et maiores sequi!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta consectetur ad dolorem atque tenetur rerum velit illum tempore dolor rem delectus, quo quam impedit exercitationem ullam et maiores sequi!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta consectetur ad dolorem atque tenetur rerum velit illum tempore dolor rem delectus, quo quam impedit exercitationem ullam et maiores sequi!</p>
                </div>

                <span />

                <div className={styles.columnS}>

                    <h3 className="h3M">Frontend Dev</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta consectetur ad dolorem atque tenetur rerum velit illum tempore dolor rem delectus, quo quam impedit exercitationem ullam et maiores sequi!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta consectetur ad dolorem atque tenetur rerum velit illum tempore dolor rem delectus, quo quam impedit exercitationem ullam et maiores sequi!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta consectetur ad dolorem atque tenetur rerum velit illum tempore dolor rem delectus, quo quam impedit exercitationem ullam et maiores sequi!</p>
                </div>
            </div>

        </section>
    )
}