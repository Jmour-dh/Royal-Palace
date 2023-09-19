import React from 'react';
import styles from "./TabsGallery.module.scss"

function RestoBar() {
    return (
        <div className={styles.Tabs_Gallery}> 
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

export default RestoBar;