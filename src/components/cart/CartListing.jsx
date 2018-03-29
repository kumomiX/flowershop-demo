import React from 'react'
import { Link } from 'react-router-dom'
import CartItem from 'components/cart/CartItem'

const CartListing = ({ cart, changeQuantity, removeFromCart, addQuantity }) => {
  const subtotal = cart.reduce((acc, x) => {
    return (acc += x.quantity * x.product.price)
  }, 0)
  return (
    <form action="" className="cart-listing">
      <div className="cart-list-headings">
        <div className="cart-product-header">Product</div>
        <div className="cart-header-group">
          <div className="cart-empty-header" />
          <div className="cart-quantity-header">Quantity</div>
          <div className="cart-price-header">Price</div>
        </div>
      </div>
      {cart.length > 0 &&
        cart.map((item, index) => (
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
  )
}

export default CartListing
