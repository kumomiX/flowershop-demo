import React, { Component } from 'react'
import Navbar from 'components/global/Navbar'
import { connect } from 'react-redux'
import Loading from 'components/global/Loading'
import ProductListing from 'components/products/ProductListing'
import addToCartWithRedux from 'actions/cartActions'
import { addQuantityWithRedux } from 'actions/cartActions'

class ProductPage extends Component {
  product = {}

  componentDidMount() {
    this.getProduct()
  }

  getProduct = () => {
    const id = this.props.location.pathname.replace(/\/product\//, '')
    const product = this.props.flowers.find(i => i.id === id)
    this.product = product
    this.forceUpdate()
  }

  render() {
    return Object.getOwnPropertyNames(this.product).length >= 1 ? (
      <div className="product-page">
        <Navbar />

        <main className="content">
          <ProductListing
            addToCart={this.props.addToCart}
            addQuantity={this.props.addQuantity}
            product={this.product}
            cart={this.props.cart}
          />
        </main>
      </div>
    ) : (
      <Loading />
    )
  }
}

const mapStateToProps = state => {
  const flowers = state.flowers
  const cart = state.cart
  return { flowers, cart }
}
const mapDispatchToProps = dispatch => ({
  addToCart: (product, quantity) =>
    dispatch(addToCartWithRedux(product, quantity)),
  addQuantity: (index, quantity) =>
    dispatch(addQuantityWithRedux(index, quantity))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)
