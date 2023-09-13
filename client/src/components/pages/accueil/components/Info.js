import React from "react";
import styles from "./Info.module.scss";
import ImgHotel from "../../../../assets/images/hotel.jpg";
import ImgRoom from "../../../../assets/images/room_2.jpg";

function Info() {
  return (
    <div className={styles.info}>
      <div className={styles.hotel}>
        <p className="p-5">
          Architecture K-Studio/Monogon Bureau d'architecture/CS Architecture
        </p>
        <h3 className="pb-5">
          Englouti par la forêt de sapins du mont Mainalo, l'étifice énigmatique
          présente des influences néoclassiques inattendues.
        </h3>
        <p>
          Ancien sanatorium construit en 1929, le bâtiment a étè préservé avec
          une approche contemporaine et une intervention minimale, insufflant
          une nouvelle vie à un monument classé au partrimoine. Une palette de
          matèriaux de mosaïque de calcaire gris et de bois sombre recouvre la
          façade de l'hôtel de 32 chambres, avec des détails texturés qui se
          poursuivent à l'intérieur du charmant intérieur.
        </p>
        <div className={styles.imgHotel}>
          <img className="pb-5" src={ImgHotel} alt="ImgHotel" />
        </div>
      </div>
      <div className={styles.room}>
        <p>Interior design K-Studio</p>
        <img className={styles.imgRoom} src={ImgRoom} alt="ImgRoom" />
        <h3>
          un intérieur intemporel privilégiant une platte de couleurs terreuses
          apporte de la chaleur à travers le bois de châtaignier, le rotin, la
          laine et le lin.
        </h3>
        <p className="m-5">
          ROYAL PALACE affiche un fort sentiment de communauté dans ses espaces
          communs accueillants, où les inités peuvent se réunir pour se
          connecter et se connecter et se détendre dans des espaces conçus pour
          susciter l'amtosphère d'un salon.
        </p>
      </div>
    </div>
  );
}

export default Info;
