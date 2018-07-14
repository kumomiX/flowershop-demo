import React from 'react'
import { connect } from 'react-redux'
import Navbar from 'components/global/Navbar'
import Checkout from 'components/checkout/Checkout'
import { clearCart } from 'actions/cartActions'

const CheckoutPage = ({ cart, clearCart }) => (
  <div className="checkoutpage">
    <Navbar />
    <header />
    <div className="header smaller">
      <div className="content">
        <h1>checkout</h1>
      </div>
    </div>
    <main>
      <Checkout cart={cart} clearCart={clearCart} />
    </main>
  </div>
)

const mapStateToProps = ({ cart }) => ({ cart })

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutPage)
