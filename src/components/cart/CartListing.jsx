import React from 'react'
import { Link } from 'react-router-dom'
import CartItem from 'components/cart/CartItem'

const CartListing = ({ cart, changeQuantity, removeFromCart, addQuantity }) => {
  const subtotal = cart.reduce(
    (acc, x) => (acc += x.quantity * x.product.price),
    0
  )
  return cart.length > 0 ? (
    <form action="" className="cart-listing">
      <div className="cart-list-headings">
        <div className="cart-product-header">Product</div>
        <div className="cart-header-group">
          <div className="cart-empty-header" />
          <div className="cart-quantity-header">Quantity</div>
          <div className="cart-price-header">Price</div>
        </div>
      </div>
      {cart.map((item, index) => (
        <CartItem
          key={index}
          index={index}
          item={item}
          changeQuantity={changeQuantity}
          removeFromCart={removeFromCart}
          addQuantity={addQuantity}
        />
      ))}
      <div className="total-price">
        Subtotal
        <span className="price">${subtotal}</span>
      </div>
      <Link to="/checkout" className="btn submit">
        Checkout
      </Link>
    </form>
  ) : (
    <div className="cart-listing empty">
      <p>Your cart seems to be empty.</p>
      <Link to="/products" className="btn">
        Start shopping
      </Link>
    </div>
  )
}

export default CartListing
