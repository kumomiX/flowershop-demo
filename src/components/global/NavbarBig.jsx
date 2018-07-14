import React from 'react'
import { Link } from 'react-router-dom'
import Logo from 'components/svgs/logoBig'

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
          <Logo className="logo" />
        </Link>
      ) : (
        <Link to="/">
          <Logo className="logo light" />
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
