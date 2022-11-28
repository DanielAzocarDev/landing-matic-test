import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

import logo from '../../assets/logo-white.png'

import './Footer.scss'
import { Button } from '../button/Button'

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__container__info'>
          <div className='footer__brand'>
            <div className='footer__logo'>
              <img className='footer__logo__image' src={logo} alt="" />
            </div>
            <div className='footer__social'>
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faYoutube} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faPinterest} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
          <div className='footer__links'>
            <div className='footer__links__rows'>
              <p className='footer__links__urls'>About Us</p>
              <p className='footer__links__urls'>Contact</p>
              <p className='footer__links__urls'>Blog</p>

            </div>
            <div className='footer__links__rows'>
              <p className='footer__links__urls'>Careers</p>
              <p className='footer__links__urls'>Support</p>
              <p className='footer__links__urls'>Privacy Policy</p>
            </div>
          </div>
        </div>
        <div className='footer__container__cta'>
          <Button>
            Request Invite
          </Button>
          <p>© Easybank. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
