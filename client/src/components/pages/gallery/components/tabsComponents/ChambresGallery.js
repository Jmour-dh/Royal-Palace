import React from 'react';
import styles from './TabsGallery.module.scss';
import ChambresImg1 from "../../../../../assets/images/tabs_chambres1.jpg"
import ChambresImg2 from "../../../../../assets/images/tabs_chambres2.webp"
import ChambresImg3 from "../../../../../assets/images/tabs_chambres3.jpg"
import ChambresImg4 from "../../../../../assets/images/tabs_chambres4.webp"


function ChambresGallery() {
    return (
        <div className={styles.Tabs_Gallery}> 
            <div className={styles.descriptiontabs}>
                <img src={ChambresImg1} alt="" />
            </div>
            <div className={styles.descriptiontabs}>
                <img src={ChambresImg2} alt="" />
            </div>
            <div className={styles.descriptiontabs}>
                <img src={ChambresImg3} alt="" />
            </div>
            <div className={styles.descriptiontabs}>
                <img src={ChambresImg4} alt="" />
            </div>
        </div>
    );
}

export default ChambresGallery;