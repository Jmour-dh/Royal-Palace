import React from "react";
import styles from "./Header.module.scss";
import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";

function Header() {
  const location = useLocation();
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
        <li className="mr-10">
          <NavLink
            className={({ isActive }) => (isActive ? "Linkactive" : "")}
            to="/"
          >
            Accueil
          </NavLink>
        </li>
        <li className="mr-10 ml-10">
          <NavLink
            className={({ isActive }) => (isActive ? "Linkactive" : "")}
            to="/resto"
          >
            Restaurants & Bars
          </NavLink>
        </li>

        <li className="mr-10 ml-10">
          <NavLink
            className={({ isActive }) => (isActive ? "Linkactive" : "")}
            to="/resto"
          >
            Gallery
          </NavLink>
        </li>

        <li className="mr-10 ml-10">
          <NavLink
            className={({ isActive }) => (isActive ? "Linkactive" : "")}
            to="location"
          >
            Location & Details
          </NavLink>
        </li>
        <li className="mr-10 ml-10">Reserver</li>

        <li className=" ml-10">
          <NavLink
            className={
              location.pathname === "/signin" || location.pathname === "/signup"
                ? "Linkactive"
                : ""
            }
            to="/signin"
          >
            <AiOutlineUser style={{ marginBottom: "2px" }} />
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
