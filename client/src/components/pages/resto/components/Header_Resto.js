import React from 'react';
import HdrRestoImg from "../../../../assets/images/resto_header_img.jpg"
import styles from "./Header_Resto.module.scss";

function Header_Resto() {
    return (
        <div className={styles.header_resto}>
            <div className={styles.Pheader_resto}>
                <h1>DINING DONE RIGHT</h1>
                <p>Entre saveurs fraîches et ambiances  aromatiques, nos restaurants vous servent une tranche de douceur de vivre, livrée avec le zeste qui fait notre renomée. </p>
            </div>
            <img src={HdrRestoImg} alt="" />
            <div className={styles.Pheader_resto}>
                <h1>CHOCOLATE HOUR</h1>
                <p>Savourez des friandises pendant la Chocolate Hour dans tous les Royal Palace Hotels & Restaurants du monde entier. Un moment de douce gourmandise.</p>
            </div>
        </div>
    );
}

export default Header_Resto;