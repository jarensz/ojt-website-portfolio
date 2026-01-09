import styles from "./Footer.module.css";
import githubLogo from "../assets/images/githubLogo.png";
import gmailLogo from "../assets/images/gmailLogo.png";
import linkedinLogo from "../assets/images/linkedinLogo.png";

function Footer() {
  return (
    <footer className={styles.portfolioFooter}>
      <div className={styles.left}>
        <p className={styles.copy}>&copy; 2025 Jandel Clarrence Sacdalan</p>
      </div>

      <div className={styles.right}>
        <a
          className={styles.iconLink}
          href="https://www.linkedin.com/in/jandel-clarrence-d-sacdalan-644a70393/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open LinkedIn profile in a new tab"
        >
          <img src={linkedinLogo} alt="LinkedIn logo" />
        </a>
        
        <a
          className={styles.iconLink}
          href="https://github.com/jarensz"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Facebook profile in a new tab"
        >
          <img src={githubLogo} alt="Github logo" />
        </a>

        <a
          className={styles.iconLink}
          href="https://mail.google.com/mail/?view=cm&fs=1&to=sacdalanjarence08@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Compose email in Gmail"
        >
          <img src={gmailLogo} alt="Gmail logo" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
