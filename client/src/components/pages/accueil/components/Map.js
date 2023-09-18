import React from "react";
import styles from "./Map.module.scss"
function MapComponent() {
  return (
    <div className={styles.mapCom}>
      <div className={styles.map}>
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509812!2d144.95373631592676!3d-37.817209979751994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2ab8a08c3e21ce0b!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1631203571909!5m2!1sen!2sau"
        ></iframe>
      </div>
      <div className={styles.loca}>
        <h3>Location</h3>
        <h5>Europe <br/>Greece <br/>Arcadia</h5>
        <p>Royal Palace Korfoxylia, Magouliana Arcadia 22010 Greece</p>
      </div>
    </div>
  );
}

export default MapComponent;
