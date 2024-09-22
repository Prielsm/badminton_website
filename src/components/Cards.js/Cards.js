import React, { useState } from 'react'
import CardItem from './CardItem'
import style from './Cards.module.scss'

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

  const overlayContentClassName = overlayInfo ? `${style.overlay__content} ${style.openContent}` : style.overlay__content;
  const overlayClassName = overlayInfo ? `${style.overlay} ${style.openOverlay}` : style.overlay;

  let formatedDate = "";
  // Date converter
  if (overlayInfo) {
    const dateOriginale = new Date(overlayInfo.dates[0]);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    formatedDate = dateOriginale.toLocaleDateString('fr-FR', options);
  }

  return (
    <div className={style.container}>
      <ul className={style.items}>
        {data.map((event) => (
          <CardItem
            key={event.title}
            title={event.title}
            src={event.src}
            subtitle={event.subtitle}
            onClick={() => openOverlay(event)}
          />
        ))}
      </ul>
      <div className={overlayClassName}>
        <button onClick={closeOverlay} className={style.overlay__close}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5304 0.622866L7.0012 4.14923L3.47204 0.620076C2.96592 0.0929844 2.21431 -0.119153 1.5073 0.0655419C0.800283 0.250237 0.248454 0.802877 0.0647961 1.51016C-0.118861 2.21744 0.0943789 2.96875 0.622213 3.47409L4.14997 7.00325L0.625003 10.5282C-0.141738 11.3204 -0.1316 12.5811 0.647782 13.3609C1.42716 14.1406 2.68784 14.1514 3.48041 13.385L7.0012 9.85307L10.5276 13.3808C11.034 13.9069 11.7852 14.1183 12.4917 13.9338C13.1982 13.7493 13.75 13.1975 13.9345 12.491C14.1191 11.7844 13.9076 11.0333 13.3816 10.5268L9.86079 7.00464L13.3858 3.47967C14.1525 2.68747 14.1424 1.42679 13.363 0.647029C12.5836 -0.132734 11.3229 -0.143488 10.5304 0.622866Z" fill="black" fill-opacity="0.4" />
          </svg>
        </button>
        <div className={overlayContentClassName}>
          {overlayInfo && (
            <>
              <img src="/images/player.png" alt="player" srcset="" className={style.overlay_player} />
              <div className={style.overlay_index}>

                <div className={style.overlay_title}>
                  <h2>{overlayInfo.title}</h2>
                  <span>{formatedDate}</span>
                </div>
                <p>{overlayInfo.resume}</p>
                <img src={overlayInfo.src} alt={overlayInfo.title} className={style.overlay__img} />
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
                    Prix : 5 euros / personne<br />
                    Les réservations se terminent le 5 décembre 2023.<br />
                    Pour réserver, veuillez envoyer un message à Caroline Baudry sur Facebook : <br />
                    https://www.facebook.com/caroline.baudry.52
                  </div>
                </section>
              </div>



            </>

          )}
        </div>
      </div>
    </div>
  )
}

export default Cards
