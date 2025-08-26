import React from "react";
import "../../App.scss";
import style from "./pages.module.scss";
import Title from "../Title/Title";
import events from "../../data/events.json";
import Cards from "../Cards/Cards";

function Evenements() {
  return (
    <main className={style.main}>
      <section className={style.main_section}>
        <Title name="Evénements" />
        <Cards data={events} />
      </section>
    </main>
  );
}

export default Evenements;
