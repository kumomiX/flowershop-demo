import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import Logo from 'components/svgs/logoSmall'
import { elastic as Menu } from 'react-burger-menu'

const NavbarMobile = ({ history, light, scrolled, quantity }) => {
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
            <Logo className="logo small" />
          </Link>
        ) : (
          <Link to="/">
            <Logo className="logo small light" />
          </Link>
        )}

        <nav className="secondary-nav" onClick={() => history.push('/cart')}>
          {quantity}
        </nav>
      </div>
    </nav>
  )
}

export default withRouter(NavbarMobile)
