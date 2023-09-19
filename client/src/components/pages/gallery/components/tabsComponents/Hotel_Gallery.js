import React from 'react';
import styles from './TabsGallery.module.scss';
import hotel1 from "../../../../../assets/images/tabs_hotel1.jpg"
import hotel2 from "../../../../../assets/images/tabs_hotel2.webp"
import hotel3 from "../../../../../assets/images/tabs_hotel3.jpg"
import hotel4 from "../../../../../assets/images/tabs_hotel4.jpg"

function Hotel_Gallery() {
    return (
        <div className={styles.Tabs_Gallery}>
            <div className={styles.descriptiontabs}>
                <img src={hotel1} alt="L'entrée"/>
                <h2>Une belle entrée Royal-Palace</h2>
            </div>

            <div className={styles.descriptiontabs}>
                <img src={hotel2} alt="Salle d'attente" />
                <h2>Salle d'attente</h2>
            </div>

            <div className={styles.descriptiontabs}>
                <img src={hotel3} alt="" />
                <h2>Hall d'entrée</h2>
            </div>

            <div className={styles.descriptiontabs}>
                <img src={hotel4} alt="piscine" />
                <h2>Vue depuis la piscine</h2>
            </div>
        </div>
    );
}

export default Hotel_Gallery;