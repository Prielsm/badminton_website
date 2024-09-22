import React from "react";
import style from './Title.module.scss'

const Title = ({ name }) => {
  return (
    <div className={style.title}>
      <h1>{name}</h1>
      <div className={style.line}>
        <div className={style.line2}></div>
      </div>
    </div>
  )
}

export default Title;