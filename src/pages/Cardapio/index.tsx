import styles from "./Cardapio.module.scss";
import {ReactComponent as Logo} from "assets/logo.svg";
import Buscador from "./Buscador";
export const Cardapio =() =>{

    return(
        <main>
            <nav className={styles.menu}>
                <Logo/>
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do codigo de da massa

                </div>

            </header>
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>
                    Cardapio
                </h3>
                <Buscador/>
            </section>
        </main>
    )


}
export default Cardapio;