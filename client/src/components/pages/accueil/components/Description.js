import React from "react";
import styles from "./Description.module.scss";

function Description() {
  return (
    <div className={styles.description}>
      <div className={styles.food}>
        <h3>Food & Drink</h3>
        <div className="separator1"></div>
        <p>Spa & Recreaction</p>
        <h2>Yoga, séances de bien-être en plien air</h2>
      </div>
      <div className={styles.arch}>
        <h3>Architecture</h3>
        <p>
          Architecture K-Studio/Monogo Bureau d'Architecture/CS Architecture
        </p>
        <div className="separator2"></div>
        <h2>Interior desgin</h2>
        <p>K-Studio</p>
      </div>
      <div className={styles.loc}>
        <h3>Locatlisation Arcadia, Greece(25), Europe(190)</h3>
        <div className="separator1"></div>
        <h2>
          Rooms <br /> 32
        </h2>
      </div>
      <div className={styles.para}>
        <h3>
          Autrefois un sanatorium aujourd'hui un sanctuaire de montage de luxe;
          ce superbe bâtiment néoclassique est situé dans un paradis naturel
          isolé, un havre de bien-être et d'aventure en plien air.
        </h3>
      </div>
    </div>
  );
}

export default Description;
