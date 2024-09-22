import React from 'react'
import '../../App.scss'
import style from './Introduction.module.scss'
import Fade from 'react-reveal/Fade';
function Introduction() {
  return (
    <div className={style.introContainer}>
      <Fade left>
        <div className={style.introSlogo}>
          <p>Sport,</p>
          <p>Détente,</p>
          <p>Convivialité !</p>
        </div>

      </Fade>

      <div className={style.intoText}>
        <img src="/images/guillemetG.png" className={style.guillemetG} alt="" />
        <img src="/images/guillemetD.png" className={style.guillemetD} alt="" />
        Ce Club rassemble tous les fous de badminton de la région !<br />
        Il se veut convivial, familial et accueillant avant tout.<br />
        Tous les niveaux sportifs y sont représentés : débutant, amateur et confirmé.<br />
        Chacun y trouvera sa place.<br />
        Il dispose de nombreuses heures disponibles.<br />
        Ce qui vous permettra de pouvoir pratiquer votre sport de façon régulière et assidue.
      </div>
    </div>
  )
}

export default Introduction