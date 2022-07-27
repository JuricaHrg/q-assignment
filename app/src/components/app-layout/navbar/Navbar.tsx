import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IGreeting } from "../../../classes/IGreeting";
import styles from "./styles.module.scss";

interface IProps {
  greeting: IGreeting;
}

export default function Navbar(props: IProps) {
  useEffect(() => {
    console.log(`${props.greeting.message} ${Navbar.name}`);
  }, []);

  function toggleNavbar() {
    document.getElementById("navbarNavAltMarkup")?.classList.toggle("show");
  }
  function collapseNavbar() {
    document.getElementById("navbarNavAltMarkup")?.classList.remove("show");
  }

  return (
    <nav className={styles.navbarWrapper}>
      <div className={`navbar navbar-expand-lg ` + styles.navbar}>
        <NavLink
          className="navbar-brand text-white"
          to="/"
          onClick={collapseNavbar}
        >
          Q Agency - Jurica
        </NavLink>
        <button
          className={`navbar-toggler ${styles.toggler}`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className={`navbar-toggler-icon ${styles.togglerIcon}`}></span>
        </button>
        <div
          className={`collapse navbar-collapse ` + styles.NavLinksWrapper}
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <NavLink
              className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.active : undefined} `
              }
              to="/"
              onClick={collapseNavbar}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.active : undefined} `
              }
              to="/posts"
              onClick={collapseNavbar}
            >
              Posts
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
