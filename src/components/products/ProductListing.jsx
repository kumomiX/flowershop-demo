import React from 'react'

const Product = ({ price, description, name, imageUrl }) => (
  <section className="product-listing">
    <div className="product-image">
      <img src={imageUrl} alt={description} />
    </div>

    <div className="product-description">
      <h2>{name}</h2>
      <p className="manufacturer">by flowershop</p>
      <p className="price">${price}</p>
      <p className="description">{description}</p>

      <form action="" className="product">
        <div className="quantity-input">
          <button className="number-button decrement">-</button>
          <input
            type="number"
            name=""
            id=""
            className="quantity"
            value="1"
            min="1"
            max="10"
          />
          <button className="number-button increment">+</button>
        </div>
        <button type="submit" className="submit">
          Add to cart
        </button>
      </form>
    </div>
  </section>
)

export default Product
