import React from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";

function Header() {
  return (
    <header
      className={`${styles.header} d-flex  flex-column justify-content-center align-items-center`}
    >
      <div
        className={`${styles.logo} d-flex flex-column justify-content-center align-items-center`}
      >
        <span>Royal Palace</span>
        <p>HOTELS & RESORTS</p>
      </div>
      <ul className="d-flex p-5">
        <li className="mr-10">Accueil</li>
        <li className="mr-10 ml-10">Restaurants & Bars</li>
        <li className="mr-10 ml-10">Gallery</li>
        <li className="mr-10 ml-10">Location & Details</li>
        <li className="mr-10 ml-10">Reserver</li>
        <li className=" ml-10">
          <AiOutlineUser style={{ marginBottom: "2px" }} />
        </li>
      </ul>
    </header>
  );
}

export default Header;
