import styles from './App.module.scss';
import { ReactComponent as Logo } from './images/HyperComply.svg';

export default function App() {
  return (
    <>
      <main>
        <section>
          <div className={styles.container}>
            <header>
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
            Section 1
          </div>
        </section>
        <section>Section 2</section>
      </main>
      <footer>Footer</footer>
    </>
  );
}
