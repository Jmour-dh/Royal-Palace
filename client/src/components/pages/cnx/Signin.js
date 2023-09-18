import React from "react";
import styles from "./Signin.module.scss";
import ImgLogo from "../../../assets/icons/Royal_Palace_Logo.jpg";
import { NavLink } from "react-router-dom";

function Signin() {
  return (
    <div className={styles.cnx}>
      <div className={styles.signin}>
        <img className={styles.logo} src={ImgLogo} alt="logo" />
        <h2>Connexion</h2>
        <form className={styles.form}>
          <div className="mb-10 d-flex flex-column">
            <label htmlFor="email" className="mb-10">
              Email :
            </label>
            <input
              type="text"
              name="email"
              placeholder="Entrez votre mail..."
            />
          </div>
          <div className="mb-10 d-flex flex-column">
            <label htmlFor="password" className="mb-10">
              Mot de passe :
            </label>
            <input
              type="password"
              name="password"
              placeholder="Entrez votre mot de passe..."
            />
          </div>
          <div className="d-flex justify-content-center ">
            <button className="btn btn-primary  m-10">Se Connecter</button>
          </div>
        </form>
        <div className="p-10">
          <p>
            Pas de compte ?{" "}
            <NavLink 
            className={styles.linkIns} to="/signup">
              Inscrivez-vous
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signin;
