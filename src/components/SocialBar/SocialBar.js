import React from 'react'
import { Link } from 'react-router-dom'
import style from './SocialBar.module.scss'
import { FacebookIcon, EmailIcon } from 'react-share'

function SocialBar() {
  return (
    <div className={style.social_container}>
      <p className={style.social_text}>Contact :</p>
      <div className={style.social_icons}>
        <Link
          className={style.linkLogo}
          to='https://www.facebook.com/lesfousduvolant.leuze'
          target='_blank'
          aria-label='Facebook'
        >
          <FacebookIcon
            className={style.iconShare}
            size={30}
            round
            bgStyle={{ fill: 'white' }}
            iconFillColor={'#57B6E1'}
          />

        </Link>
        <Link
          href="mailto:hello@metrotime.be"
          target="_blank"
          rel="noopener noreferrer"
          className={style.linkLogo}
        >
          <EmailIcon
            className={style.iconShare}
            size={30}
            round
            bgStyle={{ fill: 'white' }}
            iconFillColor={'#57B6E1'}
          />
        </Link>
      </div>
    </div>
  )
}

export default SocialBar
