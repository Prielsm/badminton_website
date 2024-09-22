import React from 'react'
import style from './Cards.module.scss'
import { Fade } from 'react-reveal'

function CardItem({ src, title, subtitle, onClick }) {
  return (
    <Fade bottom>

      <li className={style.item}>
        <figure className={style.item__pic_wrap} data-category={title}>
          <img src={src} alt={title} className={style.item__img} />
        </figure>
        <div className={style.item__info}>
          <div className={style.item__date}>
            <p className={style.item__month}>SEP</p>
            <p>02</p>
          </div>
          <div className={style.item__text}>
            <h3 className={style.item__title}>{title}</h3>
            <p className={style.item__subtitle}>{subtitle}</p>
            <button type="button" onClick={onClick} className={style.item__more}>En savoir plus &gt;</button>
          </div>
        </div>
      </li>
    </Fade>
  )
}

export default CardItem