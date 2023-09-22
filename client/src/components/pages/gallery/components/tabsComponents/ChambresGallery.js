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
                <img src={ChambresImg1} alt="Chambre" />
                <h2>Chambre Double Standard</h2>
                <p>Nos chambres doubles standard vous permettent de plonger dans une atmosphère relaxante et détendue. Ces chambres peuvent accueillir une ou deux personnes.</p>
            </div>

            <div className={styles.descriptiontabs}>
                <img src={ChambresImg3} alt="" />
                <h2>Chambre Double Supérieure</h2>
                <p>Nos chambres doubles supérieures peuvent accueillir deux personnes dans une ambiance moderne et agréable.</p>
            </div>

            <div className={styles.descriptiontabs}>
                <img src={ChambresImg2} alt="" />
                <h2>Chambre Double Deluxe</h2>
                <p>Nos chambres deluxes vous offrent un vaste espace de détente moderne et design. Elles sont idéales pour accueillir une ou deux personnes.</p>           
            </div>

            <div className={styles.descriptiontabs}>
                <img src={ChambresImg4} alt="" />
                <h2>Chambre VIP</h2>
                <p>Nos chambres VIP vous offrent un vaste espace de détente moderne et design. Elles sont idéales pour accueillir une ou deux personnes.</p> 
            </div>
        </div>
    );
}

export default ChambresGallery;