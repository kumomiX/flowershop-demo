import React from 'react'
import { connect } from 'react-redux'
import Navbar from 'components/global/Navbar'
import Footer from 'components/global/Footer'
import CartListing from 'components/cart/CartListing'
import {
  removeFromCart,
  changeQuantityWithRedux,
  addQuantityWithRedux
} from 'actions/cartActions'

const CartPage = ({ cart, changeQuantity, removeFromCart, addQuantity }) => (
  <div className="cartpage">
    <Navbar />
    <header className="smaller">
      <h1>shopping cart</h1>
    </header>
    <main>
      <section className="cart">
        <div className="content">
          <CartListing
            cart={cart}
            changeQuantity={changeQuantity}
            removeFromCart={removeFromCart}
            addQuantity={addQuantity}
          />
        </div>
      </section>
    </main>
    <Footer />
  </div>
)
const mapStateToProps = ({ cart }) => ({ cart })

const mapDispatchToProps = dispatch => ({
  changeQuantity: (index, quantity) =>
    dispatch(changeQuantityWithRedux(index, quantity)),
  removeFromCart: id => dispatch(removeFromCart(id)),
  addQuantity: (index, quantity) =>
    dispatch(addQuantityWithRedux(index, quantity))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage)
