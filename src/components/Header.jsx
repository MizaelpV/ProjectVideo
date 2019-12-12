import React from 'react';
import corona from '../assets/static/corona.png';
import iconUser from '../assets/static/iconUser.png';

const Header = () => (
  <header className='header'>
    <img className='header__img' src={corona} alt='Platzi Video' />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img
          src={iconUser}
          alt='Icono'
        />
        <p>Perfil</p>
      </div>
      <ul>
        <li>
          <a href='/'>Cuenta</a>
        </li>
        <li>
          <a href='/'>Cerrar Sesión</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
