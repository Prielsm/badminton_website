import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer-container'>
      <div className='footer-content'>
        {/* Section principale avec logo et description */}
        <div className='footer-main'>
          <div className='footer-logo'>
            <img src="/images/logo.png" alt="Badminton Club" />
            <span>Badminton Club</span>
          </div>
          <p>Rejoignez notre club et découvrez la passion du badminton dans une ambiance conviviale.</p>
        </div>

        {/* Section liens rapides */}
        <div className='footer-section'>
          <h4>Liens rapides</h4>
          <div className='links-grid'>
            <Link to='/'>Accueil</Link>
            <Link to='/a-propos'>À propos</Link>
            <Link to='/horaires'>Horaires</Link>
            <Link to='/evenements'>Événements</Link>
          </div>
        </div>

        {/* Section contact et horaires combinées */}
        <div className='footer-section'>
          <h4>Contact & Horaires</h4>
          <div className='contact-compact'>
            <div className='contact-item'>
              <i className='fas fa-phone'></i>
              <a href='tel:+33123456789'>03 20 12 34 56</a>
            </div>
            <div className='contact-item'>
              <i className='fas fa-envelope'></i>
              <a href='mailto:contact@badminton-club.be'>contact@badminton-club.be</a>
            </div>
            <div className='contact-item'>
              <i className='fas fa-clock'></i>
              <span>Lun-Ven: 18h-22h | Sam: 14h-18h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom simplifié */}
      <div className='footer-bottom'>
        <div className='footer-bottom-content'>
          <span>&copy; 2025 Badminton Club</span>
          <div className='social-icons'>
            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' aria-label='Facebook'>
              <i className='fab fa-facebook-f'></i>
            </a>
            <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' aria-label='Instagram'>
              <i className='fab fa-instagram'></i>
            </a>
            <a href='mailto:contact@badminton-club.be' aria-label='Email'>
              <i className='fas fa-envelope'></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;