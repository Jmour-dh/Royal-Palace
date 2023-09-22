import React from 'react';
import styles from "./TabsGallery.module.scss"
import RestoImg1 from "../../../../../assets/images/tabs_resto1.jpg"
import RestoImg2 from "../../../../../assets/images/tabs_resto2.jpg"
import RestoImg3 from "../../../../../assets/images/tabs_resto3.jpg"
import RestoImg4 from "../../../../../assets/images/tabs_resto4.jpg"

function RestoBar() {
    return (
        <div className={styles.Tabs_Gallery}>
            <div className={styles.descriptiontabs}>
                <img src={RestoImg1} alt="" />
                <h2>Cuisiné et présenté par notre Chef Kojiro SHIBA</h2>
            </div>
            <div className={styles.descriptiontabs}>
                <img src={RestoImg3} alt="" />
                <h2>
                    Dîner au Palais Royal
                </h2>
            </div>
            <div className={styles.descriptiontabs}>
                <img src={RestoImg2} alt="" />
                <h2>Espace de travail/détente vu sur l'océan</h2>
            </div>
            <div className={styles.descriptiontabs}>
                <img src={RestoImg4} alt="" />
                <h2>Bar</h2>
            </div>
        </div>
    );
}

export default RestoBar;