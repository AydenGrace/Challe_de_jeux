/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./Contact.module.scss";
import ContactCard from "../../../../components/ContactCard";

export default function Contact() {
  return (
    <section id="Contact" className={`f-center h-100 ${styles.Contact} p-20`}>
      <ContactCard />
    </section>
  );
}
