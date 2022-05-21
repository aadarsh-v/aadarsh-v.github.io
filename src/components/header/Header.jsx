import React from 'react'
import './header.css'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Aadarsh Vavilikolanu</h1>

        <HeaderSocials />
      </div>
    </header>
  )
}

export default Header