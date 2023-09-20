import styles from './App.module.scss';
import { ReactComponent as Logo } from './images/HyperComply.svg';

export default function App() {
  return (
    <>
      <main>
        <section>
          <div>
            <header className={styles.headerContainer}>
              <nav>
                <a href="/#" className={styles.logoLink}>
                  <Logo />
                </a>
                <ul>
                  <li>
                    <a href="/#">Product</a>
                  </li>
                  <li>
                    <a href="/#">Company</a>
                  </li>
                  <li>
                    <a href="/#">Pricing</a>
                  </li>
                  <li>
                    <a href="/#">Learn More</a>
                  </li>
                  <li>
                    <a href="/#">Sign In</a>
                  </li>
                </ul>
                <div>
                  <a href="/#" className={styles.yellowButton}>
                    Request a demo
                  </a>
                </div>
              </nav>
            </header>
            <div className={styles.heroSection}>
              <div>
                <h1>
                  Stop wasting time <br />
                  on security questionaires
                </h1>
                <p>
                  HyperComply is the easiest way for InfoSec and Sales leaders
                  to share compliance information, automate security
                  questionnaires, and accelerate sales.
                </p>
                <a href="/#" className={styles.yellowButton}>
                  Request a demo
                </a>
              </div>
              <div>
                <img
                  className={styles.heroImg}
                  src="https://assets.website-files.com/630955d355f57f38b7c3b1f5/64ee70fcc86b681d52f35e73_Hero-img.png"
                  alt="Screenshot of Security Software"
                />
              </div>
            </div>
          </div>
        </section>
        {/* <div className={styles.preFooter}>
          <section>
            <h2 className={styles.oversizedText}>Trusted by top teams</h2>
          </section>
        </div> */}
      </main>
      <footer>
        <div className={styles.footerGrid}>
          <a>
            <img
              href="/#"
              src="https://assets.website-files.com/630955d355f57f38b7c3b1f5/630a379f741fe7cbee2cd282_logo-footer-icon.svg"
              alt="Company Logo"
            />
          </a>
          <div className={styles.footerGridOne}>
            <h3>Legal</h3>
            <uL>
              <li>Privacy Policy</li>
              <li>Trust Page</li>
            </uL>
          </div>
          <div className={styles.footerGridTwo}>
            <h3>Contact</h3>
            <uL>
              <li>Email Us</li>
              <li>Support Us</li>
            </uL>
          </div>
          <div className={styles.footerGridThree}>
            <h3>About </h3>
            <uL>
              <li>Company</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </uL>
          </div>
        </div>
      </footer>
    </>
  );
}
