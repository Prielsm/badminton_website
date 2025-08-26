import React from 'react';
import style from './ComiteCard.module.scss';

function ComiteCard({ firstName, lastName, role, phone, email, image }) {
  return (
    <div className={style.card}>
      <div className={style.card__image}>
        <img src={image} alt={`${firstName} ${lastName}`} />
      </div>
      <div className={style.card__content}>
        <h3 className={style.card__name}>{firstName} {lastName}</h3>
        <p className={style.card__role}>{role}</p>
        <div className={style.card__contact}>
          <div className={style.contact__item}>
            <i className="fas fa-phone"></i>
            <a href={`tel:${phone}`}>{phone}</a>
          </div>
          <div className={style.contact__item}>
            <i className="fas fa-envelope"></i>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComiteCard;