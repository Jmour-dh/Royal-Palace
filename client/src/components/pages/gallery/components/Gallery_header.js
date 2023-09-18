import React from 'react';
import styles from "./Gallery_header.module.scss";
import BannerImg from "../../../../assets/images/Banner_GalleryImg.jpg"

function Gallery_header() {
    return (
     <div className={styles.Gallery_header}>
        <h1>Gallerie Photo Hôtel Royal Palace </h1>
        <div className={styles.Banner_Gallery}>
            <img src={BannerImg} alt="" />
        </div>
     </div>
    );
}

export default Gallery_header;