import React from "react";
import styles from "./Contact.module.scss";

function Contact() {
  return (
    <div className={styles.contact}>
      <h1>laissez-nous vous contacter</h1>
      <div className="d-flex">
        <div className={styles.contLeft}>
          <div className={styles.phone}>
            <h3>Applez-nous 24h/24 et 7j/7 sans frais</h3>
            <span>00 800 49 12 90 54</span>
          </div>
          <div className={styles.phone}>
            <h3>Email inquiries</h3>
            <p>
              Pour toute question concernant les réservations, veuillez envoyer
              un e-mail à res@royalpalacehotels.com
            </p>
          </div>
          <div className={styles.phone}>
            <h3>Meetings & events </h3>
            <p>
              Envoyez vos demandes par e-mail à res@royalpalacehotls.com ou
              appelez-nous au +49 (0)30-884 940 040
            </p>
          </div>
        </div>
        <div className={styles.contRight}>
          <form className="d-flex flex-column justify-content-center align-items-center">
            <input
            className="mb-20"
              type="text"
              name="name"
              placeholder="Entrez votre nom de famille..."
            />
            <input
            className="mb-20"
              type="text"
              name="lName"
              placeholder="Entrez votre prénom..."
            />
            <input
            className="mb-20"
              type="text"
              name="email"
              placeholder="Entrez votre mail..."
            />
            <input
            className="mb-20"
              type="number"
              name="phone"
              placeholder="Entrez votre numéro de téléphone..."
            />
            <textarea
                id="msg"
                type="text"
                name="msg"
                placeholder="Ecrivez votre message..."
               
              />
              
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
