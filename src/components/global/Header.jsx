import React from 'react'

const Header = ({ text, arrow, imageUrl }) => (
  <header
    className="homepage-header"
    style={{ backgroundImage: `url(${imageUrl}) ` }}
  >
    <div className="content">
      <h1>{text}</h1>
    </div>
    {arrow ? (
      <div className="down-arrow">
        <span className="arrow"> ❯ </span>
      </div>
    ) : null}
  </header>
)

export default Header
