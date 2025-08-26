import React from 'react';
import ComiteCard from '../ComiteCard/ComiteCard';
import style from './ComiteSection.module.scss';
import comiteData from '../../data/comite.json';

function ComiteSection() {
  return (
    <div className={style.container}>
      <div className={style.cards_grid}>
        {comiteData.map((member, index) => (
          <ComiteCard
            key={index}
            firstName={member.firstName}
            lastName={member.lastName}
            role={member.role}
            phone={member.phone}
            email={member.email}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
}

export default ComiteSection;