import React from 'react';
import styles from " ../Hotel_Gallery.module.scss"
import hotel1 from "../../../../../assets/images/tabs_hotel1.jpg"
function Hotel_Gallery() {
    return (
        <div className={styles.Hotel_Gallery}>
            <img src={hotel1} alt="" />
        </div>
    );
}

export default Hotel_Gallery;