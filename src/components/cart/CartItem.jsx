import React from 'react'
import QuantityInput from 'components/global/QuantityInput'

const CartItem = ({
  index,
  item,
  changeQuantity,
  removeFromCart,
  addQuantity
}) => {
  const onDecrement = e => {
    e.preventDefault()
    if (item.quantity <= 1) removeFromCart(item.product.id)
    else {
      addQuantity(index, -1)
    }
  }

  const onIncrement = e => {
    e.preventDefault()
    if (item.quantity >= item.product.quantity) return
    addQuantity(index, 1)
  }

  const onChange = e => {
    e.preventDefault()
    if (e.target.value > item.product.quantity) {
      return
    } else if (e.target.value < 1) {
      removeFromCart(item.product.id)
    } else {
      changeQuantity(index, e.target.value)
    }
  }

  return (
    <div className="cart-item">
      <div className="product-image">
        <img src={item.product.imageUrl} alt={item.product.description} />
      </div>

      <div className="cart-details">
        <div className="cart-title">
          <h3>{item.product.name}</h3>
        </div>

        <div className="cart-quantity">
          <QuantityInput
            value={item.quantity}
            onDecrement={onDecrement}
            onIncrement={onIncrement}
            onChange={onChange}
          />
        </div>

        <div className="cart-price">
          <p className="price">
            <span className="product-price">${item.product.price}</span>
            <span> / </span>
            <span className="total-product-price">
              ${item.product.price * item.quantity}
            </span>
          </p>
        </div>

        <div className="cart-delete">
          <button className="remove">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 15.55635 15.55635"
            >
              <rect
                fill="currentColor"
                x="-2.22183"
                y="6.77817"
                width="20"
                height="2"
                transform="translate(7.77817 -3.22183) rotate(45)"
              />
              <rect
                fill="currentColor"
                x="-2.22183"
                y="6.77817"
                width="20"
                height="2"
                transform="translate(18.77817 7.77817) rotate(135)"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
