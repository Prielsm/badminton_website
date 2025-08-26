import React from "react";
import "../../App.scss";
import HeroSection from "../HeroSection/HeroSection";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import Introduction from "../Introduction/Introduction";
import events from "../../data/events.json";
import Title from "../Title/Title";
import style from "./pages.module.scss";
import { Link } from "react-router-dom";

function Home() {
  const firstTwoEvents = events.slice(0, 2);
  return (
    <>
      <HeroSection />
      <main className={style.main}>
        <Introduction />
        <section className={style.main_section}>
          <Title name="Dernières news" />
          <Link to="/evenements">
            <p className={style.more}>Voir toutes les news &gt;</p>
          </Link>
          <Cards data={firstTwoEvents} />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;
