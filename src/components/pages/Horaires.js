import React from "react";
import "../../App.scss";
import Title from "../Title/Title";
import style from "./pages.module.scss";
import HoraireTable from "../Table/HoraireTable";
import coursLibres from "../../data/horaires/courslibres.json";
import cours1_2 from "../../data/horaires/cours1_2.json";
import cours2_3 from "../../data/horaires/cours2_3.json";

function Horaires() {
  return (
    <main className={style.main}>
      <section className={style.main_section}>
        <Title name="Jeux libres" />
        <HoraireTable infos={coursLibres} />
      </section>
      <section className={style.main_section}>
        <Title name="Cours niveau 1 & 2" />
        <HoraireTable infos={coursLibres} />
      </section>
      <section className={style.main_section}>
        <Title name="Cours niveau 2 & 3" />
        <HoraireTable infos={coursLibres} />
      </section>
    </main>
  );
}

export default Horaires;
