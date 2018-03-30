import React from 'react'
import { Link } from 'react-router-dom'
import logoLight from 'assets/logo/logo-small-light.svg'
import logo from 'assets/logo/logo-small.svg'
import { elastic as Menu } from 'react-burger-menu'

const NavbarMobile = ({ light, scrolled, quantity }) => {
  return (
    <nav className={(light ? ' light ' : ' ') + (scrolled ? ' scrolled' : ' ')}>
      <Menu>
        <Link to="/products">Products</Link>
        <Link to="/options">Options</Link>
      </Menu>

      <div
        className={
          'nav-container' +
          (light ? ' light ' : ' ') +
          (scrolled ? ' scrolled' : ' ')
        }
      >
        {scrolled ? (
          <Link to="/">
            <img src={logo} alt="flowershop" className="logo" />
          </Link>
        ) : (
          <Link to="/">
            <img
              src={light ? logoLight : logo}
              alt="flowershop"
              className="logo"
            />
          </Link>
        )}

        <nav className="secondary-nav">
          <Link to="/cart">{quantity}</Link>
        </nav>
      </div>
      {/* {this.state.scrolled && (
          <button className="scroll-btn" onClick={e => window.scrollTo(0, 0)} />
        )} */}
    </nav>
  )
}

export default NavbarMobile
