/* eslint-disable no-unused-vars */
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={`d-flex`}>
      <div className={`${styles.sections_div}`}>
        <div className={`${styles.footer_div}`}>
          <a className={`${styles.logo}`}></a>
          <h2>Nos Partenaires</h2>
          <div
            className={`d-flex w-100 justify-content-center align-items-center gap-20 mb-20`}
          >
            <a className={`${styles.Spa}`}></a>
            <a className={`${styles.Zooplus}`}></a>
          </div>
          <div
            className={`d-flex w-100 justify-content-center align-items-center gap-10 mb-10`}
          >
            <img src="./img/Credit_card.png" alt="Credit Card Payement" />
            <img src="./img/Paypal.png" alt="Paypal Payement" />
            <img src="./img/Visa.png" alt="Visa Payement" />
            <img src="./img/Stripe.png" alt="Stripe Payement" />
          </div>
          <div
            className={`d-flex w-100 justify-content-center align-items-center gap-10`}
          >
            <img src="./img/Security.png" alt="Stripe Payement" />
            <p>Payement sécurisé</p>
          </div>
        </div>

        <div className={`${styles.footer_div}`}>
          <h2>Informations</h2>
          <div
            className={`d-flex w-100 justify-content-center align-items-center gap-10`}
          >
            <img src="./img/Smartphone.png" alt="Phone" />
            <p>06.44.80.21.65</p>
          </div>
          <div
            className={`d-flex w-100 justify-content-center align-items-center gap-10`}
          >
            <img src="./img/Gmail.png" alt="Email" />
            <p>contact@lachalledejeux.fr</p>
          </div>
          <div
            className={`d-flex w-100 justify-content-center align-items-center gap-10`}
          >
            <img src="./img/Google_maps.png" alt="Adress" />
            <p>19 rue des Arts, 59000 Lille, France</p>
          </div>
          <nav>
            <a href="#">Politique de confidentialité</a>
            <a href="#">Mentions légales</a>
            <a href="#">Conditions générales de vente</a>
            <a href="#">Conditions générales de remboursement</a>
            <a href="#">Plan du site</a>
          </nav>
        </div>
        <div className={`${styles.footer_div}`}>
          <h2>Horaires</h2>
          <p>Lundi - Fermé</p>
          <p>Mardi - Fermé</p>
          <p>Mercredi - De 9H à 22H</p>
          <p>Jeudi - De 9H à 22H</p>
          <p>Vendredi - De 9H à Minuit</p>
          <p>Samedi - De 9H à Minuit</p>
          <p>Dimanche - De 9H à 22H</p>
        </div>
        <div className={`${styles.footer_div}`}>
          <h2>Navigation</h2>
          <nav>
            <a href="#">Accueil</a>
            <a href="#">Concept</a>
            <a href="#">Nos Salles</a>
            <a href="#">Nos Résidents</a>
            <a href="#">Contact</a>
            <a href="#">Mon Compte</a>
          </nav>
          <div className={`d-flex p-10 w-100 g-10 ${styles.socials_footer}`}>
            <a>
              <i className={`fa-brands fa-facebook-f`}></i>
            </a>
            <a>
              <i className={`fa-brands fa-instagram`}></i>
            </a>
            <a>
              <i className={`fa-brands fa-tiktok`}></i>
            </a>
          </div>
        </div>
      </div>
      <p className={`${styles.Copyright}`}>
        La Challe de Jeux © Copyrights 2024
      </p>
    </footer>
  );
}
