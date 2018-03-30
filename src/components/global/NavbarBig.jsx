import React from 'react'
import { Link } from 'react-router-dom'
// import logo from 'assets/logo/logo1.svg'
import logoLight from 'assets/logo/logo-big-light.svg'
import logo from 'assets/logo/logo-big.svg'

const NavbarBig = ({ light, scrolled, quantity }) => (
  <nav>
    <div
      className={
        'nav-container' +
        (light ? ' light ' : ' ') +
        (scrolled ? ' scrolled' : ' ')
      }
    >
      <nav className="primary-nav">
        <Link to="/products">Products</Link>
        <Link to="/options">Options</Link>
      </nav>
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
        <Link to="/cart">Cart ({quantity})</Link>
      </nav>
    </div>
    {/* {this.state.scrolled && (
          <button className="scroll-btn" onClick={e => window.scrollTo(0, 0)} />
        )} */}
  </nav>
)

export default NavbarBig
