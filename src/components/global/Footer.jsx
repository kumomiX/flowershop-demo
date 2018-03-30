import React from 'react'
import logo from 'assets/logo/logo-big.svg'
import about from 'assets/logo/about.svg'
import social from 'assets/logo/social.svg'

const Footer = () => (
  <div className="content">
    <footer>
      <div className="footer-about">
        <div className="footer-header">
          <img src={logo} alt="" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <nav className="footer-links">
        <dl>
          <dt>
            <div className="footer-header">
              <img src={about} alt="" />
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
              <img src={social} alt="" />
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
