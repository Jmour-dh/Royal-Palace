import React from 'react';
import styles from './Gallery_tabs.module.scss'
import Hotel_Gallery from './tabsComponents/Hotel_Gallery';
import ChambresGallery from './tabsComponents/ChambresGallery';
import RestoBar from './tabsComponents/RestoBar';
import Detente from './tabsComponents/Detente';

function Gallery_tabs() {
    return (
        <div className={styles.Gallery_tabs}>
                <div className={styles.tabs}>
                    <input type="radio" name="tabs" id="tabone" checked="checkout" />
                    <label for="tabone">All</label>
                    <div className={styles.tab}>
                            <Hotel_Gallery/>
                            <ChambresGallery/>
                            <RestoBar/>
                            <Detente/>
                    </div>

                    <input type="radio" name="tabs" id="tabtwo" />
                    <label for="tabtwo">L'Hôtel</label>
                    <div className={styles.tab}>
                        <Hotel_Gallery/>
                    </div>

                    <input type="radio" name="tabs" id="tabthree" />
                    <label for="tabthree">Chambres</label>
                    <div className={styles.tab}>
                    <ChambresGallery/>
                    </div>

                    <input type="radio" name="tabs" id="tabfour" />
                    <label for="tabfour">Restaurant & Bar</label>
                    <div className={styles.tab}>
                    <RestoBar/>
                    </div>

                    <input type="radio" name="tabs" id="tabfive" />
                    <label for="tabfive">Détentes</label>
                    <div className={styles.tab}>
                    <Detente/>
                    </div>
                </div>
            </div>
    );
}

export default Gallery_tabs;