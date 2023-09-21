import React from 'react';
import styles from './TabsGallery.module.scss';
import hotel1 from "../../../../../assets/images/tabs_hotel1.jpg"
import hotel2 from "../../../../../assets/images/tabs_hotel2.webp"
import hotel3 from "../../../../../assets/images/tabs_hotel3.jpg"
import hotel4 from "../../../../../assets/images/tabs_hotel4.jpg"


function Hotel_Gallery() {
    const images =[
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Ffr%2Fimages%2Fanimals%2Fwolf&psig=AOvVaw2H0oL1feVnQ8Nm6DVb_PiP&ust=1695214261271000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNjz0rDbtoEDFQAAAAAdAAAAABAE"
    ]
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