/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./ContactCard.module.scss";

export default function ContactCard({ isTitle = false }) {
  return (
    <div className={`card f-center flex-column p-20 ${styles.container}`}>
      {isTitle ? <h1>Contact</h1> : <h2>Contact</h2>}
      <form action="" className={`f-center flex-column gap-10`}>
        <div className={`d-flex gap-10`}>
          <input
            type="text"
            name="Name"
            placeholder="Votre nom..."
            className={`d-flex w-100`}
          />
          <input
            type="text"
            name="Email"
            placeholder="Votre Email..."
            className={`d-flex w-100`}
          />
        </div>
        <input
          type="text"
          name="Subject"
          placeholder="Le sujet de votre message..."
          className={`d-flex w-100`}
        />
        <textarea
          name="Content"
          className={`d-flex w-100`}
          placeholder="Votre message..."
        ></textarea>
        <div className={`d-flex w-100`}>
          <input type="checkbox" name="RGPD" id="rgpd" required />
          <label htmlFor="#rgpd">
            En cochant cette case vous acceptez que vos données soient
            collectées conformément à notre{" "}
            <a href="#">Politique de confidentialité</a>
          </label>
        </div>
      </form>
    </div>
  );
}
