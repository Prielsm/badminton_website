import React from "react";
import "../../App.scss";
import Title from "../Title/Title";
import style from "./pages.module.scss";
import ComiteSection from "../ComiteSection/ComiteSection";

function APropos() {
  return (
    <main className={style.main}>
      <section className={style.main_section}>
        <Title name="La salle" />
        <p className={style.text}>
          Notre infrastructure accueil{" "}
          <span className={style.blue}>6 terrains de badminton</span>,
          disponible au public lors des heures d’ouvertures et hors heures de
          cours. <br />
          Une <span className={style.blue}>buvette</span> ouverte est également
          à votre disposition lors de chaque ouverture de la salle
        </p>
        <div className={style.containerImg}>
          <img src="/images/salle1.jpg" alt="" />
          <img src="/images/salle2.jpg" alt="" />
        </div>
      </section>
      <section className={style.main_section}>
        <Title name="L'emplacement" />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2532.392938130846!2d3.6213067761255577!3d50.60123567649606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2fd0cec37e213%3A0x14c4a6577c3dc5c0!2sCentre%20Educatif%20Saint-Pierre!5e0!3m2!1sfr!2sfr!4v1700072868187!5m2!1sfr!2sfr"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className={style.map}
        ></iframe>
      </section>
      <section className={style.main_section}>
        <Title name="Le comité" />
        <ComiteSection />
      </section>
    </main>
  );
}

export default APropos;
