import React from "react";
import styles from "./Decouvrir.module.scss";
import { NavLink } from "react-router-dom";
import ImgRoom from "../../../../assets/images/room_1.jpg";

function Decouvrir() {
  return (
    <div className={styles.decouvrir}>
      <div className={styles.images}>
        <img src={ImgRoom} alt="imgRoom" />
      </div>
      <div className={styles.dec}>
        <NavLink className="btn btn-primary"  to="/gallery">Découvrir</NavLink>
      </div>
    </div>
  );
}

export default Decouvrir;
