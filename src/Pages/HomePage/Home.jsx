import styles from "./Home.module.css";
import { Link, NavLink } from "react-router-dom";
import pfp from "../../assets/images/anaxaProfile.jpg";
import bg from "../../assets/images/cyreneBackground.jpg";

export default function Home() {
  return (
    <section className={styles.portfolioBody}>
      <div className={styles.cardsContainer}>
        {/* Left card  */}
        <article className={styles.profileCard}>
          <div className={styles.media}>
            {/* Left card image */}
            <img
              className={styles.profileImage}
              src={pfp}
              alt="Jandel Clarrence Sacdalan — profile"
              loading="lazy"
            />
          </div>

          <div className={styles.profileIntroduction}>
            <h2 className={styles.name}>Jandel Clarrence Sacdalan</h2>
            <p className={styles.introductionText}>
              Hi — I'm Jandel Clarrence. I'm an undergraduate taking BSIT at
              Pamantasan ng Lungsod ng Valenzuela.
            </p>

            <div className={styles.ctaRow}>
              <NavLink to="/read-more" className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink}>
                <a className={styles.readMore} href="#" aria-label="Read more about Jandel Clarrence">
                  Read more
                </a>
              </NavLink>
            </div>
          </div>
        </article>

        {/* Right card */}
        <article className={styles.profileCard}>
          <div className={styles.media}>
            {/* Right card image */}
            <img
              className={styles.profileImage}
              src={bg}
              alt="Placeholder"
              loading="lazy"
            />
          </div>

          <div className={styles.profileIntroduction}>
            <h2 className={styles.name}>Internship Journey</h2>
            <p className={styles.introductionText}>
                I had my internship at Valenzuela City's Our Lady of Fatima University as an IT Support.
                Me and my other colleagues mainly assist our IT Support heads in regards with technical
                problems, setting up computer networks, and more.
            </p>

            <div className={styles.ctaRow}>
              <NavLink to="/ojt-experience" className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink}>
                <a className={styles.readMore} href="#" aria-label="Internship experiences">My experiences</a>
              </NavLink>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}