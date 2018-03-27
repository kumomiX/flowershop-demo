import React from 'react'
import { Link } from 'react-router-dom'

const OptionCard = ({
  name,
  imageUrl,
  quantity,
  color,
  description,
  setFilter
}) => (
  <Link to="/options/" className="option-item" onClick={() => setFilter(color)}>
    <h3 className="option-title">{color}</h3>
    <img src={imageUrl} alt={description} className="option-image" />
    <div className="overlay">
      <div className="overlay-background" />
      <div className="overlay-content">
        <div className="shop-btn">shop now</div>
      </div>
    </div>
  </Link>
)

export default OptionCard
