import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({
  id,
  name,
  imageUrl,
  price,
  quantity,
  color,
  description
}) => (
  <Link to={'/product/' + id} className="product-item">
    <img src={imageUrl} alt={description} className="product-image" />
    <div className="overlay">
      <div className="overlay-background" />
      <div className="overlay-content">
        <div className="product-name">{name}</div>
        <div className="price">${price}</div>
      </div>
    </div>
  </Link>
)

export default Product
