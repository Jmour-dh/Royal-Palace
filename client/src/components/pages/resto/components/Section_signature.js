import React from 'react';
import styles from './Section_signature.module.scss'
import S1Img from "../../../../assets/images/Plat_S1.jpg"
import S2Img from "../../../../assets/images/Plat_S2.jpg"

function Section_signature() {
    return (
        <div className={styles.Section_signature}>
            <div className={styles.PSignature}>
                <h1>SIGNATURE FLAVOURS</h1>
                <p>Des plats Suisses comme vous n'en avez jamais goutés auparavant, débordants d'authenticité, avec un tourbillon et une grande touche de créativité culinaire de Royal Palace.</p>
            </div>
            <div className={styles.Grid_section_signature}>
                <div className={styles.GridContaint}>
                    <img src={S1Img} alt="" />
                    <div className={styles.GridP}>
                        <h1>Riz Casimir</h1>
                        <p>Les saveurs de curry et de fruits tropicaux suggèrent une origine exotique, pourtant le Riz Casimir a été inventé dans la cuisine
                            Mövenpick par notre fondateur, le légendaire Ueli Prager. </p>
                    </div>
                </div>
                <div className={styles.GridContaint}>
                    <img src={S2Img} alt="" />
                    <div className={styles.GridP}>
                        <h1>Zürich-Style Veal</h1>
                        <p>Un succulent veau dans une appétissante sauce à la crème et aux champignons, servi avec un rösti croustillant traditionnel, un plat suisse par excellence populaire dans les restaurants Mövenpick</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section_signature;