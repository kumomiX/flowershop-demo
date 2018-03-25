import React from 'react'
import { Link } from 'react-router-dom'
import ProductPage from 'components/products/ProductPage'

const Product = ({ name, imageUrl, price, quantity, color, description }) => (
  <Link
    to={'/product/' + name}
    component={ProductPage}
    className="product-item"
  >
    <img src={imageUrl} alt={description} className="product-image" />
    <div className="overlay">
      <div className="overlay-background" />
      <div className="overlay-content">
        <div className="product-name">{name}</div>
        <div className="price">{price}</div>
      </div>
    </div>
  </Link>
)

export default Product
