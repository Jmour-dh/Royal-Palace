import React from "react";
import ImgHome from "../../../../assets/images/home.jpg";
import styles from "./Home.module.scss";
function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.title}>
        <h1>Royal Palace</h1>
      </div>
      <div className={styles.overlay}>
        <img src={ImgHome} alt="ImgHome" />
      </div>
    </div>
  );
}

export default Home;
