// src/Header/Header.jsx
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";

import sunPng from "../assets/images/light-modeIcon.png";
import moonPng from "../assets/images/night-modeIcon.png";


function applyDarkClass(enabled) {
  if (typeof document === "undefined") return;
  try {
    const html = document.documentElement;
    const body = document.body;
    const root = document.getElementById("root");

    if (enabled) {
      html.classList.add("dark");
      body.classList.add("dark");
      if (root) root.classList.add("dark");
    } else {
      html.classList.remove("dark");
      body.classList.remove("dark");
      if (root) root.classList.remove("dark");
    }
  } catch (err) {
    console.warn("applyDarkClass error:", err);
  }
}

export default function Header() {
  const [dark, setDark] = useState(() => {
    try {
      if (typeof localStorage === "undefined") return false;
      return localStorage.getItem("theme") === "dark";
    } catch (err) {
      console.warn("Could not read theme from localStorage:", err);
      return false;
    }
  });

  useEffect(() => {
    applyDarkClass(dark);
    try {
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("theme", dark ? "dark" : "light");
      }
    } catch (err) {
      console.warn("Could not persist theme to localStorage:", err);
    }
  }, [dark]);

  return (
    <header className={styles.portfolioHeader}>
      <div className={styles.left}>
        <h1 className={styles.title}>Jandel Clarrence</h1>
      </div>

      <div className={styles.right}>
        <nav aria-label="Main navigation" className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/read-more" className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink}>
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <label
          className={styles.switch}
          aria-label="Toggle dark theme"
          role="switch"
          aria-checked={dark}
        >
          <input
            type="checkbox"
            checked={dark}
            onChange={(e) => setDark(e.target.checked)}
          />

          {/* Slider + knob with icons */}
          <span className={`${styles.slider} ${styles.round}`} aria-hidden="true">
            <span className={styles.knob}>
              <img src={sunPng} className={`${styles.icon} ${styles.iconSun}`} alt="" />
              <img src={moonPng} className={`${styles.icon} ${styles.iconMoon}`} alt="" />
            </span>
          </span>
        </label>
      </div>
    </header>
  );
}
