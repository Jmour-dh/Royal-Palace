import React from 'react';
import styles from './Gallery_tabs.module.scss'
import Hotel_Gallery from './tabs_components/Hotel_Gallery';

function Gallery_tabs() {
    return (
        <div className={styles.Gallery_tabs}>
                <div className={styles.tabs}>
                    <input type="radio" name="tabs" id="tabone" checked="checkout" />
                    <label for="tabone">All</label>
                    <div className={styles.tab}>
                            <Hotel_Gallery/>
                    </div>

                    <input type="radio" name="tabs" id="tabtwo" />
                    <label for="tabtwo">L'Hôtel</label>
                    <div className={styles.tab}>
                        {/* < /> */}
                    </div>

                    <input type="radio" name="tabs" id="tabthree" />
                    <label for="tabthree">Chambres</label>
                    <div className={styles.tab}>
                        {/* < /> */}
                    </div>

                    <input type="radio" name="tabs" id="tabfour" />
                    <label for="tabfour">Restaurant & Bar</label>
                    <div className={styles.tab}>
                        {/* < /> */}
                    </div>

                    <input type="radio" name="tabs" id="tabfive" />
                    <label for="tabfive">Détentes</label>
                    <div className={styles.tab}>
                        {/* < /> */}
                    </div>
                </div>
            </div>
    );
}

export default Gallery_tabs;