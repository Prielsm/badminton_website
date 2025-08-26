import React from "react";
import "../../App.scss";
import { Button } from "../Button/Button";
import "./HeroSection.scss";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Les Fous du Volant</h1>
      <p>Envie de nous rejoindre ?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          link="/a-propos"
        >
          Plus d'infos
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          link="/tarifs"
        >
          Voir les tarifs <i className="far fa-play-circle"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
