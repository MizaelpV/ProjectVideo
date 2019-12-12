import React from 'react';

const Header = () => (
  <header className='header'>
    <img className='header__img' src='images/corona.png' alt='Platzi Video' />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img
          src='https://img.icons8.com/cotton/64/000000/name--v2.png'
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
