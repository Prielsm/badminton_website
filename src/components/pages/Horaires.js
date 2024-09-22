import React from "react";
import "../../App.scss";
import Title from "../Title/Title";
import style from "./pages.module.scss";
import HoraireTable from "../Table/HoraireTable";

function Horaires() {
  return (
    <main className={style.main}>
      <section className={style.main_section}>
        <Title name="Horaire" />
        <HoraireTable />
      </section>
      <section className={style.main_section}>
        <Title name="La salle" />
      </section>
      <section className={style.main_section}>
        <Title name="Le comité" />
      </section>
    </main>
  );
}

export default Horaires;
