import React, { useState } from "react";
import styles from "./Header.module.scss";
import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineUser, AiOutlineBars } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../context";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import logoIcon from "../../assets/icons/Royal_Palace_Logo.jpg";

function Header() {
  const { user, signout } = useContext(AuthContext);
  const location = useLocation();

  const getHeaderClassName = () => {
    if (
      location.pathname === "/signin" ||
      location.pathname === "/signup" ||
      location.pathname === "/contact"
    ) {
      return styles.headerCnx; // Apply different styles for the "Profile" page
    } else {
      return styles.headerDefault; // Apply default styles for other pages
    }
  };
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={`${getHeaderClassName()} d-flex    align-items-center`}>
      <div
        className={`${styles.logo} d-flex flex-column justify-content-center align-items-center`}
      >
        <span>Royal Palace</span>
        <p>HOTELS & RESORTS</p>
      </div>
      <div className={styles.logoIcon}>
        <img className={styles.ico} src={logoIcon} alt="logo" />
      </div>

      {user ? (
        user.admin === true ? (
          <ul className={`${styles.headerList} d-flex p-5`}>
            <li className="mr-10">
              <NavLink
                className={({ isActive }) => (isActive ? "Linkactive" : "")}
                to="/admin"
              >
                Profil admin
              </NavLink>
            </li>
            <li className="ml-10">
              <NavLink onClick={() => signout()}>Déconnexion</NavLink>
            </li>
          </ul>
        ) : (
          <ul className={`${styles.headerList} d-flex p-5`}>
            <li className="mr-10">
              <NavLink
                className={({ isActive }) => (isActive ? "Linkactive" : "")}
                to="/profile"
              >
                Profil
              </NavLink>
            </li>
            <li className="mr-10 ml-10">
              <NavLink
                className={({ isActive }) => (isActive ? "Linkactive" : "")}
                to="/reserver"
              >
                Réserver
              </NavLink>
            </li>
            <li className="ml-10">
              <NavLink onClick={() => signout()}>Déconnexion</NavLink>
            </li>
          </ul>
        )
      ) : (
        <ul className={`${styles.headerList} d-flex p-5`}>
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
              to="/gallery"
            >
              Gallery
            </NavLink>
          </li>

          <li className="mr-10 ml-10">
            <NavLink
              className={({ isActive }) => (isActive ? "Linkactive" : "")}
              to="/localisation"
            >
              Location & Details
            </NavLink>
          </li>
          <li className=" ml-10">
            <NavLink
              className={
                location.pathname === "/signin" ||
                location.pathname === "/signup"
                  ? "Linkactive"
                  : ""
              }
              to="/signin"
            >
              <AiOutlineUser style={{ marginBottom: "2px" }} />
            </NavLink>
          </li>
        </ul>
      )}
      <AiOutlineBars
        className={styles.headerXs}
        onClick={() => setShowMenu(true)}
      />
      {showMenu && (
        <>
          <div onClick={() => setShowMenu(false)} className="calc"></div>
          <HeaderMenu />
        </>
      )}
    </header>
  );
}

export default Header;
