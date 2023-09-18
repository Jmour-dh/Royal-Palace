import React from 'react';
import styles from './HotelGallery.module.scss';
import hotel1 from "../../../../../assets/images/tabs_hotel1.jpg"
import hotel2 from "../../../../../assets/images/tabs_hotel2.webp"
import hotel3 from "../../../../../assets/images/tabs_hotel3.jpg"
import hotel4 from "../../../../../assets/images/tabs_hotel4.jpg"

function Hotel_Gallery() {
    return (
        <div className={styles.Hotel_Gallery}>
            <div className={styles.descriptiontabs}>
                <img src={hotel1} alt="" />
            </div>
            <div className={styles.descriptiontabs}>
                <img src={hotel2} alt="" />
            </div>
            <div className={styles.descriptiontabs}>
                <img src={hotel3} alt="" />
            </div>
            <div className={styles.descriptiontabs}>
                <img src={hotel4} alt="" />
            </div>
        </div>
    );
}

export default Hotel_Gallery;