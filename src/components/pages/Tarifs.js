import React from 'react'
import '../../App.scss'
import Title from '../Title/Title'
import style from './pages.module.scss'
import Fiche from '../Fiche/Fiche'

function Tarifs() {
  return (
    <main className={style.main}>
      <section className={style.main_section}>
        <Title name="Jeux libres" />
       
      </section>
      <section className={style.main_section}>
        <Title name="Cours niveau 1 & 2" />
      </section>
      <section className={style.main_section}>
        <Title name="Cours niveau 2 & 3" />
      </section>

    </main>
  )
}

export default Tarifs
