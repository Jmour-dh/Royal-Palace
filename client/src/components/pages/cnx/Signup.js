import React from "react";
import styles from "./Signup.module.scss";
import ImgLogo from "../../../assets/icons/Royal_Palace_Logo.jpg";
import { NavLink } from "react-router-dom";

function Signup() {
  return (
    <div className={styles.ins}>
      <div className={styles.signup}>
        <img className={styles.logo} src={ImgLogo} alt="logo" />
        <h2>Inscription</h2>
        <span>
          Vous y être presque! <br />
          Parlez-nous un peu plus de vous
        </span>
        <form className={styles.form}>
          <div className="mb-10 d-flex flex-column">
            <label htmlFor="name" className="mb-10">
              Nom de famille :
            </label>
            <input
              type="text"
              name="name"
              placeholder="Entrez votre nom de famille..."
            />
          </div>
          <div className="mb-10 d-flex flex-column">
            <label htmlFor="lName" className="mb-10">
              Prénom :
            </label>
            <input
              type="text"
              name="lName"
              placeholder="Entrez votre prénom..."
            />
          </div>
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
          <div className="mb-10 d-flex flex-column">
            <label htmlFor="name" className="mb-10">
              Vérification de mot de passe :
            </label>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="Entrez votre mot de passe..."
            />
          </div>
          <div className="d-flex justify-content-center ">
            <button className="btn btn-primary  m-10">Valider</button>
          </div>
        </form>
        <div className="p-10">
          <p>
            Déja Inscrit ?{" "}
            <NavLink className={styles.linkIns} to="/signin">
              Connectez-vous
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
