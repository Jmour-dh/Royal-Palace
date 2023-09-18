import React from 'react';
import styles from "./Grid_resto.module.scss"
import GridImg from "../../../../assets/images/macarons_grid.jpg"

function Grid_resto() {
    return (
       <div className={styles.Grid_resto}>
            <img src={GridImg} alt="" />
            <div className={styles.RGrid_resto}>
                <h1>Tick-tock, it's mmm-o'clock</h1>
                <p>Lorsque l'horloge sonne le chocolat, il est temps de savourer, puisque tous les hotels Royal Palace du monde entier offrent quptidiennement à leurs clients 60 délicieuses minutes de gourmandises sucrées, c'est une heure dévorante à ne pas manquer.</p>
            </div>
       </div>
    );
}

export default Grid_resto;