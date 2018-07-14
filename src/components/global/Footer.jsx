import React from 'react'
import Logo from 'components/svgs/logoFooter'
import About from 'components/svgs/about'
import Social from 'components/svgs/social'

const Footer = () => (
  <div className="content">
    <footer>
      <div className="footer-about">
        <div className="footer-header">
          <Logo />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <nav className="footer-links">
        <dl>
          <dt>
            <div className="footer-header">
              <About />
            </div>
          </dt>
          <dd>
            <a href="/">About</a>
          </dd>
          <dd>
            <a href="/">Shipping & returns</a>
          </dd>
          <dd>
            <a href="/">Privacy policy</a>
          </dd>
          <dd>
            <a href="/">T&CS</a>
          </dd>
        </dl>
      </nav>

      <nav className="footer-social">
        <dl>
          <dt>
            <div className="footer-header">
              <Social />
            </div>
          </dt>
          <dd>
            <a href="/">facebook</a>
          </dd>
          <dd>
            <a href="/">instagram</a>
          </dd>
          <dd>
            <a href="/">twitter</a>
          </dd>
        </dl>
      </nav>
    </footer>
  </div>
)

export default Footer
