import React, { useState } from "react";
import CardItem from "./CardItem";
import style from "./Cards.module.scss";

function Cards({ data }) {
  console.log("events", data);
  const [overlayInfo, setOverlayInfo] = useState(null);
  console.log("infos", overlayInfo);

  const openOverlay = (info) => {
    setOverlayInfo(info);
    document.body.style.overflow = "hidden";

    console.log("open");
  };

  const closeOverlay = () => {
    setOverlayInfo(null);
    document.body.style.overflow = "auto";
  };

  const overlayContentClassName = overlayInfo
    ? `${style.overlay__content} ${style.openContent}`
    : style.overlay__content;
  const overlayClassName = overlayInfo
    ? `${style.overlay} ${style.openOverlay}`
    : style.overlay;

  let formatedDate = "";
  // Date converter
  if (overlayInfo) {
    const dateOriginale = new Date(overlayInfo.dates[0]);
    const options = { day: "numeric", month: "long", year: "numeric" };
    formatedDate = dateOriginale.toLocaleDateString("fr-FR", options);
  }

  return (
    <div className={style.container}>
      <ul className={style.items}>
        {data.map((event, id) => (
          <CardItem
            key={id}
            title={event.title}
            src={event.src}
            subtitle={event.subtitle}
            onClick={() => openOverlay(event)}
          />
        ))}
      </ul>
      <div className={overlayClassName}>
        <img
          src="icons/close.svg"
          alt="close"
          onClick={closeOverlay}
          className={style.overlay__close}
        />
        <div className={overlayContentClassName}>
          {overlayInfo && (
            <>
              <img
                src="/images/player.png"
                alt="player"
                srcset=""
                className={style.overlay_player}
              />
              <div className={style.overlay_index}>
                <div className={style.overlay_title}>
                  <h2>{overlayInfo.title}</h2>
                  <span>{formatedDate}</span>
                </div>
                <p>{overlayInfo.resume}</p>
                <img
                  src={overlayInfo.src}
                  alt={overlayInfo.title}
                  className={style.overlay__img}
                />
                <section className={style.overlay_section}>
                  <h3>Date et heure</h3>
                  <div className={style.overlay_infos}>
                    <img src="/images/calendar.png" alt="" srcset="" />
                    <span>{formatedDate}</span>
                  </div>
                </section>
                <section className={style.overlay_section}>
                  <h3>Localisation</h3>
                  <div className={style.overlay_infos}>
                    <img src="/images/localisation.png" alt="" srcset="" />
                    <span>{overlayInfo.adresse}</span>
                  </div>
                </section>
                <section className={style.overlay_section}>
                  <h3>Informations supplémentaires</h3>
                  <div className={style.overlay_infos}>
                    Prix : 5 euros / personne
                    <br />
                    Les réservations se terminent le 5 décembre 2023.
                    <br />
                    Pour réserver, veuillez envoyer un message à Caroline Baudry
                    sur Facebook : <br />
                    https://www.facebook.com/caroline.baudry.52
                  </div>
                </section>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cards;
