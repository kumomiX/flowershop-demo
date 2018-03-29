import React from 'react'
import CheckoutProduct from 'components/checkout/CheckoutProduct'

const CheckoutSummary = ({ cart }) => {
  const subtotal = cart.reduce(
    (acc, x) => (acc += x.quantity * x.product.price),
    0
  )
  return (
    <div className="checkout-summary">
      <div className="form-header">
        <h2>Summary</h2>
      </div>

      <div className="checkout-items">
        {cart.length > 0 ? (
          cart.map((item, ind) => <CheckoutProduct key={ind} item={item} />)
        ) : (
          <div>Cart seems to be empty</div>
        )}
      </div>

      <div className="price-calculations">
        <div className="price-item">
          Subtotal<div className="price">${subtotal}</div>
        </div>
        <div className="price-item">
          Tax<div className="price">$0</div>
        </div>
        <div className="price-item">
          Shipping<div className="price">$0</div>
        </div>
      </div>

      <div className="total-price price">
        Total<div className="price">${subtotal}</div>
      </div>
    </div>
  )
}

export default CheckoutSummary
