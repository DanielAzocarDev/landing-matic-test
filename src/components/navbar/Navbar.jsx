import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { Button } from '../button/Button'

import './Navbar.scss'

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar__container'>
        <img className='navbar__logo' src={logo} alt="" />

        <ul className='navbar__menu'>
          <li className='navbar__menu__item'><NavLink className='navbar__menu__item__link' to='/'>home</NavLink></li>
          <li className='navbar__menu__item'><NavLink className='navbar__menu__item__link' to='/about'>About</NavLink></li>
          <li className='navbar__menu__item'><NavLink className='navbar__menu__item__link' to='/contact'>Contact</NavLink></li>
          <li className='navbar__menu__item'><NavLink className='navbar__menu__item__link' to='/blog'>Blog</NavLink></li>
          <li className='navbar__menu__item'><NavLink className='navbar__menu__item__link' to='/careers'>Careers</NavLink></li>
        </ul>

        <Button>Request Invite</Button>
      </div>
    </nav>
  )
}
