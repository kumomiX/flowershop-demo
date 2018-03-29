import React from 'react'
import CheckoutSummary from 'components/checkout/CheckoutSummary'
import CheckoutForm from 'components/checkout/CheckoutForm'

const Checkout = ({ cart, clearCart }) => (
  <section className="checkout">
    <div className="content">
      <CheckoutSummary cart={cart} />

      <CheckoutForm clearCart={clearCart} />
    </div>
  </section>
)

export default Checkout
