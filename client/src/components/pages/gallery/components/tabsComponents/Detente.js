import React from 'react';
import styles from "./TabsGallery.module.scss"
import DetenteImg1 from "../../../../../assets/images/tabs_detente1.jpg"
import DetenteImg2 from "../../../../../assets/images/tabs_detente2.jpg"
import DetenteImg3 from "../../../../../assets/images/tabs_detente3.jpg"
import DetenteImg4 from "../../../../../assets/images/tabs_detente4.jpg"


function Detente() {
    return (
        <div className={styles.Tabs_Gallery}> 
        <div className={styles.descriptiontabs}>
            <img src={DetenteImg1} alt="" />
            <h2>Massage/Détente</h2>
        </div>
        <div className={styles.descriptiontabs}>
            <img src={DetenteImg2} alt="" />
            <h2>piscine</h2>
        </div>
        <div className={styles.descriptiontabs}>
            <img src={DetenteImg3} alt="" />
            <h2>Espace à l'étage</h2>
        </div>
        <div className={styles.descriptiontabs}>
            <img src={DetenteImg4} alt="" />
            <h2>Plage</h2>
        </div>
    </div>
    );
}

export default Detente;