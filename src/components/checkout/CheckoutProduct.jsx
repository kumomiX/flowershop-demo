import React from 'react'

const CheckoutProduct = ({ item }) => (
  <div className="checkout-product">
    <div className="product-image">
      <img src={item.product.imageUrl} alt={item.product.description} />
    </div>

    <div className="product-info">
      <div className="product-title">
        {item.product.name} X {item.quantity}
      </div>
      <div className="price">${item.quantity * item.product.price}</div>
    </div>
  </div>
)

export default CheckoutProduct
